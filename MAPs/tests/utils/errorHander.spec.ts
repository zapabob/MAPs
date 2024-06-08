import { errorHandler } from '../../src/utils/errorHandler';
import { Request, Response, NextFunction } from 'express';

describe('errorHandler', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    next = jest.fn();
  });

  it('should handle errors with status', () => {
    const error = new Error('Test error');
    error.status = 400;
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
  });

  it('should handle generic errors', () => {
    const error = new Error('Test error');
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error.' });
  });
});