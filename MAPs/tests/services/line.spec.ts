import { lineService } from '../../src/services/line';
import { Event } from '@line/bot-sdk';
import { lineClient } from '../../src/config/api';
import { chatbotsService } from '../../src/services/chatbots';

jest.mock('../../src/config/api');
jest.mock('../../src/services/chatbots');

describe('lineService', () => {
  let event: Event;

  beforeEach(() => {
    event = {
      type: 'message',
      message: { type: 'text', text: 'hello' },
      replyToken: 'test-reply-token',
    } as Event;
  });

  it('should handle message events and call chatbots service', async () => {
    const chatbot = { id: 'chatbot-1', name: 'General Chatbot', trigger: 'hello', model: 'gpt-3.5-turbo', context: 'General knowledge' };
    chatbotsService.findChatbotByTrigger.mockResolvedValue(chatbot);
    chatbotsService.processMessage.mockResolvedValue('Test response');
    await lineService.handleMessage(event);
    expect(chatbotsService.findChatbotByTrigger).toHaveBeenCalledWith(event.message.text);
    expect(chatbotsService.processMessage).toHaveBeenCalledWith(chatbot, event.message.text);
    expect(lineClient.replyMessage).toHaveBeenCalledWith(event.replyToken, { type: 'text', text: 'Test response' });
  });

  it('should handle unknown messages', async () => {
    chatbotsService.findChatbotByTrigger.mockResolvedValue(undefined);
    await lineService.handleMessage(event);
    expect(lineClient.replyMessage).toHaveBeenCalledWith(event.replyToken, { type: 'text', text: 'Sorry, I don\'t understand. Please try again.' });
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    chatbotsService.processMessage.mockRejectedValue(error);
    await lineService.handleMessage(event);
    expect(lineClient.replyMessage).toHaveBeenCalledWith(event.replyToken, { type: 'text', text: 'An error occurred. Please try again later.' });
  });
});