import { Request, Response } from 'express';
import { chatbotsService } from '../services/chatbots';

export const chatbotController = async (req: Request, res: Response) => {
  try {
    const { chatbotId, message } = req.body;

    if (!chatbotId || !message) {
      return res.status(400).json({ error: 'Missing chatbot ID or message in request body.' });
    }

    const response = await chatbotsService.processMessage(chatbotId, message);

    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};