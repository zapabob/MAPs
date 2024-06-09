import { chatbotController } from '../../src/controllers/chatbots';
import { Request, Response } from 'express';
import { chatbotsService } from '../../src/services/chatbots';
import { chatbots } from '../../src/config/chatbots';

jest.mock('../../src/services/chatbots');
jest.mock('../../src/config/chatbots');

describe('chatbotController', () => {
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

  it('should return 400 if chatbot ID or message is missing', async () => {
    req.body = {};
    await chatbotController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing chatbot ID or message in request body.' });
  });

  it('should call chatbotsService with correct chatbot ID and message', async () => {
    req.body = { chatbotId: 'chatbot-1', message: 'Test message' };
    chatbotsService.processMessage.mockResolvedValue('Test response');
    await chatbotController(req, res);
    expect(chatbotsService.processMessage).toHaveBeenCalledWith(req.body.chatbotId, req.body.message);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ response: 'Test response' });
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    chatbotsService.processMessage.mockRejectedValue(error);
    req.body = { chatbotId: 'chatbot-1', message: 'Test message' };
    await chatbotController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error.' });
  });
});