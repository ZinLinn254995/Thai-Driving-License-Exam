import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI();
const allQuestions = JSON.parse(fs.readFileSync('questions_th.json', 'utf8'));
const batchDir = path.join(process.cwd(), 'scripts', 'batches');
if (!fs.existsSync(batchDir)) fs.mkdirSync(batchDir, { recursive: true });

const BATCH_SIZE = 10;
const totalBatches = Math.ceil(allQuestions.length / BATCH_SIZE);
const MODELS = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];

console.log(`Starting translation of ${allQuestions.length} questions across ${totalBatches} batches...`);

async function translateBatch(batchIndex) {
  const batchFile = path.join(batchDir, `batch_${batchIndex}.json`);
  if (fs.existsSync(batchFile)) {
    try {
      const existing = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
      if (Array.isArray(existing) && existing.length > 0) {
        console.log(`Batch ${batchIndex + 1}/${totalBatches} already cached.`);
        return existing;
      }
    } catch {}
  }

  const start = batchIndex * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, allQuestions.length);
  const slice = allQuestions.slice(start, end);

  const prompt = `Translate these Thai Driving License exam questions and options into:
1. Myanmar / Burmese (မြန်မာဘာသာ - clear, accurate, natural Burmese traffic/driving test terminology).
2. English (concise, professional driving license traffic sign test terminology).

Input JSON:
${JSON.stringify(slice, null, 2)}

Return a valid JSON array of objects with the exact schema:
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
RULES:
1. Retain the exact 'id', 'image', 'q_th', and the exact order and 'isCorrect' flag of each option.
2. In 'q_my' and 'my' (Burmese), make sure Myanmar text is natural, formal, and accurate for Burmese people taking the Thai driving license test.
3. Output ONLY the JSON array.`;

  for (let attempt = 1; attempt <= 6; attempt++) {
    const model = MODELS[(batchIndex + attempt) % MODELS.length];
    try {
      console.log(`Translating batch ${batchIndex + 1}/${totalBatches} (questions ${start + 1} to ${end}) using ${model} (attempt ${attempt})...`);
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text.trim());
      if (!Array.isArray(parsed) || parsed.length !== slice.length) {
        throw new Error(`Length mismatch: expected ${slice.length}, got ${parsed?.length}`);
      }

      for (let i = 0; i < slice.length; i++) {
        const orig = slice[i];
        const res = parsed[i];
        res.id = orig.id;
        res.image = orig.image;
        res.q_th = orig.q_th;
        for (let j = 0; j < orig.options.length; j++) {
          res.options[j].isCorrect = orig.options[j].isCorrect;
          res.options[j].th = orig.options[j].th;
        }
      }

      fs.writeFileSync(batchFile, JSON.stringify(parsed, null, 2));
      console.log(`Saved batch ${batchIndex + 1}/${totalBatches}`);
      return parsed;
    } catch (err) {
      console.error(`Error on batch ${batchIndex + 1} with ${model}:`, err.message || err.status);
      if (attempt === 6) throw err;
      const waitTime = Math.min(1000 * Math.pow(2, attempt), 12000);
      console.log(`Waiting ${waitTime}ms before retry...`);
      await new Promise(r => setTimeout(r, waitTime));
    }
  }
}

async function main() {
  const merged = [];
  for (let b = 0; b < totalBatches; b++) {
    const batchData = await translateBatch(b);
    merged.push(...batchData);
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`All ${merged.length} questions translated! Saving to src/data/questions.json...`);
  fs.writeFileSync('src/data/questions.json', JSON.stringify(merged, null, 2));
  console.log('Successfully written src/data/questions.json!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
