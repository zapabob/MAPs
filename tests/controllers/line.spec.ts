import { lineController } from '../../src/controllers/line';
import { Request, Response } from 'express';
import { lineService } from '../../src/services/line';

jest.mock('../../src/services/line');

describe('lineController', () => {
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

  it('should return 400 if events are missing', async () => {
    req.body = {};
    await lineController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing events in request body.' });
  });

  it('should handle message events', async () => {
    req.body = { events: [{ type: 'message', message: { type: 'text', text: 'hello' } }] };
    await lineController(req, res);
    expect(lineService.handleMessage).toHaveBeenCalledWith(req.body.events[0]);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.end).toHaveBeenCalled();
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    lineService.handleMessage.mockRejectedValue(error);
    req.body = { events: [{ type: 'message', message: { type: 'text', text: 'hello' } }] };
    await lineController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error.' });
  });
});