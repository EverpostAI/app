import OpenAI from 'openai';
import { config } from '../config';

const openai = new OpenAI({ apiKey: config.openaiKey });

export const callOpenAI = async (prompt: string, max_tokens = 2000) => {
    const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens,
    });
    return completion.choices[0].message?.content;
};
