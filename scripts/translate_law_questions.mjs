import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI();
const lawQuestions = JSON.parse(fs.readFileSync('questions_law_th.json', 'utf8'));
const batchDir = path.join(process.cwd(), 'scripts', 'law_batches');
if (!fs.existsSync(batchDir)) fs.mkdirSync(batchDir, { recursive: true });

const BATCH_SIZE = 10;
const totalBatches = Math.ceil(lawQuestions.length / BATCH_SIZE);

console.log(`Starting translation of ${lawQuestions.length} traffic law questions across ${totalBatches} batches...`);

async function translateBatch(bIdx) {
  const batchFile = path.join(batchDir, `batch_${bIdx}.json`);
  if (fs.existsSync(batchFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
      if (Array.isArray(data) && data.length > 0) {
        console.log(`Batch ${bIdx + 1}/${totalBatches} already cached.`);
        return data;
      }
    } catch {}
  }

  const start = bIdx * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, lawQuestions.length);
  const slice = lawQuestions.slice(start, end);

  const prompt = `Translate these Thai Driving License exam questions and options (Topic: Traffic Laws / กฎหมายจราจร) into:
1. "q_en" and option "en": Clear, professional English traffic law and driving license test terminology.
2. "q_my" and option "my": Natural, accurate Myanmar / Burmese (မြန်မာဘာသာ) translation for Burmese people taking the Thai driving test. Note that Burmese will be displayed as a subtitle below the Thai/English text, so ensure concise, clear, and accurate terminology.

Input JSON:
${JSON.stringify(slice, null, 2)}

Return a valid JSON array of objects with the exact schema:
[
  {
    "id": number,
    "q_num_orig": number,
    "category": "traffic_laws",
    "image": string or null,
    "q_th": string,
    "q_en": string,
    "q_my": string,
    "options": [
      {
        "th": string,
        "en": string,
        "my": string,
        "image": string or null,
        "isCorrect": boolean
      }
    ]
  }
]
RULES:
1. Retain the exact 'id', 'q_num_orig', 'category', 'image', 'q_th', and each option's 'th', 'image', and 'isCorrect' values.
2. In 'q_my' and option 'my' (Burmese), make sure translation is high quality, accurate Burmese driving test terms.
3. If option 'th' is 'รูปภาพ' (image), set 'en' to 'Image' and 'my' to 'ပုံ' (or describe briefly if applicable).
4. Output ONLY the JSON array.`;

  for (let attempt = 1; attempt <= 4; attempt++) {
    const model = attempt % 2 === 1 ? 'gemini-3.1-flash-lite' : 'gemini-3.8-flash';
    try {
      console.log(`Translating batch ${bIdx + 1}/${totalBatches} (questions ${start + 1}..${end}) using ${model} (attempt ${attempt})...`);
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

      // Verify fields
      for (let i = 0; i < slice.length; i++) {
        const orig = slice[i];
        const res = parsed[i];
        res.id = orig.id;
        res.q_num_orig = orig.q_num_orig;
        res.category = 'traffic_laws';
        res.image = orig.image;
        res.q_th = orig.q_th;
        for (let j = 0; j < orig.options.length; j++) {
          res.options[j].isCorrect = orig.options[j].isCorrect;
          res.options[j].th = orig.options[j].th;
          res.options[j].image = orig.options[j].image;
        }
      }

      fs.writeFileSync(batchFile, JSON.stringify(parsed, null, 2));
      console.log(`Saved batch ${bIdx + 1}/${totalBatches}`);
      return parsed;
    } catch (err) {
      console.error(`Error on batch ${bIdx + 1}, attempt ${attempt}:`, err.message || err.status);
      if (attempt === 4) throw err;
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

async function main() {
  const merged = [];
  for (let b = 0; b < totalBatches; b++) {
    const batchData = await translateBatch(b);
    merged.push(...batchData);
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`All ${merged.length} law questions translated! Saving to src/data/questions_law.json...`);
  fs.writeFileSync('src/data/questions_law.json', JSON.stringify(merged, null, 2));
  console.log('Successfully written src/data/questions_law.json!');
}

main().catch(err => {
  console.error('Fatal error in translation:', err);
  process.exit(1);
});
