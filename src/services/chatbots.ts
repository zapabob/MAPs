import { Chatbot } from '../models/chatbot';
import { chatbots } from '../config/chatbots';
import { llmService } from './llm';

export const chatbotsService = {
  async findChatbotByTrigger(message: string) {
    const chatbot = chatbots.find((chatbot) => chatbot.trigger === message);
    return chatbot;
  },
  async processMessage(chatbot: Chatbot, message: string) {
    const response = await llmService.generateResponse(chatbot.model, message, chatbot.context);
    return response;
  },
};