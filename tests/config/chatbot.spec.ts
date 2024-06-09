import { chatbots } from '../../src/config/chatbots';
import { Chatbot } from '../../src/models/chatbot';

describe('chatbots', () => {
  it('should be an array of Chatbot objects', () => {
    expect(Array.isArray(chatbots)).toBe(true);
    expect(chatbots).toBeDefined();
    chatbots.forEach((chatbot) => {
      expect(chatbot).toHaveProperty('id');
      expect(chatbot).toHaveProperty('name');
      expect(chatbot).toHaveProperty('trigger');
      expect(chatbot).toHaveProperty('model');
      expect(chatbot).toHaveProperty('context');
    });
  });
});