import { apiController } from '../../src/controllers/api';
import { Request, Response } from 'express';
import { apiService } from '../../src/services/api';

jest.mock('../../src/services/api');

describe('apiController', () => {
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

  it('should return 400 if apiName is missing', async () => {
    req.body = {};
    await apiController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing API name in request body.' });
  });

  it('should call apiService with correct apiName and params', async () => {
    req.body = { apiName: 'youtube', params: { videoId: 'test-video-id' } };
    apiService.callApi.mockResolvedValue('Test response');
    await apiController(req, res);
    expect(apiService.callApi).toHaveBeenCalledWith('youtube', req.body.params);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith('Test response');
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    apiService.callApi.mockRejectedValue(error);
    req.body = { apiName: 'youtube', params: { videoId: 'test-video-id' } };
    await apiController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error.' });
  });
});