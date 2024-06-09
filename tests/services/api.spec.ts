import { apiService } from '../../src/services/api';
import { youtubeService } from '../../src/services/youtube';
import { xService } from '../../src/services/x';
import { notionService } from '../../src/services/notion';
import { haggingfaceService } from '../../src/services/haggingface';
import { googleService } from '../../src/services/google';
;

jest.mock('../../src/services/youtube');
jest.mock('../../src/services/x');
jest.mock('../../src/services/notion');
jest.mock('../../src/services/haggingface');
jest.mock('../../src/services/google');

describe('apiService', () => {
  it('should call youtubeService for youtube api', async () => {
    const params = { videoId: 'test-video-id' };
    youtubeService.getVideoInfo.mockResolvedValue('Test response');
    const response = await apiService.callApi('youtube', params);
    expect(youtubeService.getVideoInfo).toHaveBeenCalledWith(params.videoId);
    expect(response).toBe('Test response');
  });

  it('should call xService for x api', async () => {
    const params = { username: 'test-username' };
    xService.getUserTweets.mockResolvedValue('Test response');
    const response = await apiService.callApi('x', params);
    expect(xService.getUserTweets).toHaveBeenCalledWith(params.username);
    expect(response).toBe('Test response');
  });

  it('should call notionService for notion api', async () => {
    const params = { pageId: 'test-page-id' };
    notionService.getPageContent.mockResolvedValue('Test response');
    const response = await apiService.callApi('notion', params);
    expect(notionService.getPageContent).toHaveBeenCalledWith(params.pageId);
    expect(response).toBe('Test response');
  });

  it('should call haggingfaceService for haggingface api', async () => {
    const params = { model: 'test-model' };
    haggingfaceService.generateResponse.mockResolvedValue('Test response');
    const response = await apiService.callApi('haggingface', params);
    expect(haggingfaceService.generateResponse).toHaveBeenCalledWith(params.model);
    expect(response).toBe('Test response');
  });

  it('should call googleService for google api', async () => {
    const params = { query: 'test-query' };
    googleService.search.mockResolvedValue('Test response');
    const response = await apiService.callApi('google', params);
    expect(googleService.search).toHaveBeenCalledWith(params.query);
    expect(response).toBe('Test response');
  });

  it('should throw error for invalid api name', async () => {
    await expect(apiService.callApi('invalid-api', {})).rejects.toThrowError('Invalid API name.');
  });
});