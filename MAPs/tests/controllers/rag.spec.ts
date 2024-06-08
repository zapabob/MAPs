import { ragController } from '../../src/controllers/rag';
import { Request, Response } from 'express';
import { ragService } from '../../src/services/rag';
import { rag } from '../../src/config/rag';

jest.mock('../../src/config/rag');
jest.mock('../../src/services/rag');


describe('ragController', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      end: jest.fn(),
    } as unknown as Response;
  });

  it('should return 400 if question is missing', async () => {
    req.body = {};
    await ragController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing question in request body.' });
  });

  it('should call ragService with correct question and context', async () => {
    req.body = { question: 'Test question', context: 'Test context' };
    ragService.searchKnowledge.mockResolvedValue('Test response');
    await ragController(req, res);
    expect(ragService.searchKnowledge).toHaveBeenCalledWith(req.body.question, req.body.context);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ response: 'Test response' });
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    ragService.searchKnowledge.mockRejectedValue(error);
    req.body = { question: 'Test question', context: 'Test context' };
    await ragController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error.' });
  });
});