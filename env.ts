import dotenv from 'dotenv';
dotenv.config();

const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY || '';
const GOOGLE_API_KEY: string = process.env.GOOGLE_API_KEY || '';
const ANTHROPIC_API_KEY: string = process.env.ANTHROPIC_API_KEY || '';
const LINE_API_KEY: string = process.env.LINE_API_KEY || '';
const YOUTUBE_API_KEY: string = process.env.YOUTUBE_API_KEY || '';
const X_API_KEY: string = process.env.X_API_KEY || '';
const MICROSOFT_API_KEY: string = process.env.MICROSOFT_API_KEY || '';

// アプリケーションのコードを実行する際に必要な環境変数
