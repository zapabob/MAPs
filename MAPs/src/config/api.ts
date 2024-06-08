import { Configuration, OpenAIApi, GeminiApi } from 'openai';
import { LineClient } from '@line/bot-sdk';
import { notion } from './notion';

const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,
});

export const openai = new OpenAIApi(openaiConfig);
export const gemini = new GeminiApi(geminiConfig);

export const lineClient = new LineClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

export const notionClient = notion;