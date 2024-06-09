import { Chatbot } from '../../src/models/chatbot';

describe('Chatbot', () => {
  it('should have correct properties', () => {
    const chatbot: Chatbot = {
      id: 'chatbot-1',
      name: 'General Chatbot',
      trigger: 'hello',
      model: 'gpt-3.5-turbo',
      context: 'General knowledge',
      api: 'openai',
      apiKey: 'YOUR_OPENAI_API_KEY',
    };
    const chatbot2: Chatbot = {
      id: 'chatbot-2',
      name: 'Chatbot 2',
      trigger: 'chatbot 2',
      model: 'gpt-4',
      context: 'General knowledge',
      api: 'openai',
      apiKey: 'YOUR_OPENAI_API_KEY',
    };
    const chatbot3: Chatbot = {
      id: 'chatbot-3',
      name: 'Chatbot 3',
      trigger: 'chatbot 3',
      model: 'Gemini-Pro1.5',
      context: 'General knowledge',
      api: 'gemini',
      apiKey: 'YOUR_GEMINI_API_KEY',
      id: 'chatbot-4',
      name: 'Chatbot 4',
      trigger: 'chatbot 4',
      model: 'haggingface',
      context: 'General knowledge',
      api: 'huggingface',
      apiKey: 'YOUR_HUGGINGFACE_API_KEY',
    };
    expect(chatbot).toHaveProperty('id', 'chatbot-1');
    expect(chatbot).toHaveProperty('name', 'General Chatbot');
    expect(chatbot).toHaveProperty('trigger', 'hello');
    expect(chatbot).toHaveProperty('model', 'gpt-3.5-turbo');
    expect(chatbot).toHaveProperty('context', 'General knowledge');
    expect(chatbot).toHaveProperty('api', 'openai');
    expect(chatbot).toHaveProperty('apiKey', 'YOUR_OPENAI_API_KEY');
    expect(chatbot2).toHaveProperty('id', 'chatbot-2');
    expect(chatbot2).toHaveProperty('name', 'Chatbot 2');
    expect(chatbot2).toHaveProperty('trigger', 'chatbot 2');
    expect(chatbot2).toHaveProperty('model', 'gpt-4o');
    expect(chatbot2).toHaveProperty('context', 'General knowledge');
    expect(chatbot2).toHaveProperty('api', 'openai');
    expect(chatbot2).toHaveProperty('apiKey', 'YOUR_OPENAI_API_KEY');
    expect(chatbot3).toHaveProperty('id', 'chatbot-3');
    expect(chatbot3).toHaveProperty('name', 'Chatbot 3');
    expect(chatbot3).toHaveProperty('trigger', 'chatbot 3');
    expect(chatbot3).toHaveProperty('model', 'Gemini-Pro1.5');
    expect(chatbot3).toHaveProperty('context', 'General knowledge');
    expect(chatbot3).toHaveProperty('api', 'gemini');
    expect(chatbot3).toHaveProperty('apiKey', 'YOUR_GEMINI_API_KEY');
    expect(chatbot4).toHaveProperty('id', 'chatbot-4');
    expect(chatbot4).toHaveProperty('name', 'Chatbot 4');
    expect(chatbot4).toHaveProperty('trigger', 'chatbot 4');
    expect(chatbot4).toHaveProperty('model', 'haggingface');
    expect(chatbot4).toHaveProperty('context', 'General knowledge');
    expect(chatbot4).toHaveProperty('api', 'huggingface');
    expect(chatbot4).toHaveProperty('apiKey', 'YOUR_HUGGINGFACE_API_KEY');
  });
});