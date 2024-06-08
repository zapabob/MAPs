import { Request, Response } from 'express';
import { lineService } from '../services/line';

export const lineController = async (req: Request, res: Response) => {
  try {
    const events = req.body.events;

    if (!events) {
      return res.status(400).json({ error: 'Missing events in request body.' });
    }

    for (const event of events) {
      if (event.type === 'message' && event.message.type === 'text') {
        await lineService.handleMessage(event);
      }
    }

    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};