import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI();
const raw = JSON.parse(fs.readFileSync('questions_th.json', 'utf8'));

console.log('Testing with first 3 questions...');
const testSlice = raw.slice(0, 3);

const prompt = `Translate these Thai Driving License exam questions and options into:
1. Myanmar / Burmese (မြန်မာဘာသာ - clear, natural, accurate Myanmar traffic / driving terminology).
2. English (concise, standard traffic sign terminology).

Input JSON:
${JSON.stringify(testSlice, null, 2)}

Return a valid JSON array of objects with schema:
[
  {
    "id": number,
    "image": string,
    "q_th": string,
    "q_my": string,
    "q_en": string,
    "options": [
      {
        "th": string,
        "my": string,
        "en": string,
        "isCorrect": boolean
      }
    ]
  }
]
IMPORTANT: Retain the EXACT 'id', 'image', 'q_th', and the order and 'isCorrect' flag of every option. Only add 'q_my', 'q_en', 'my', 'en'. Output ONLY the JSON array.`;

async function run() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json'
    }
  });

  console.log('Result sample:');
  console.log(response.text.substring(0, 500));
}

run().catch(console.error);
