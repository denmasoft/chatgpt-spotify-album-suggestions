import dotenv from 'dotenv';
dotenv.config();

interface OpenaiConfig {
  apiKey: string;
  apiUrl: string;
  model: string;
}

const openaiConfig: OpenaiConfig = {
  apiKey: process.env.OPENAI_API_KEY || '',
  apiUrl: 'https://api.openai.com/v1/chat/completions',
  model: "gpt-4o",
};

export default openaiConfig;