import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI();
const uniqueOptions = JSON.parse(fs.readFileSync('scripts/options_unique.json', 'utf8'));
const outDir = path.join(process.cwd(), 'scripts', 'opt_dict');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const CHUNK_SIZE = 40;
const totalChunks = Math.ceil(uniqueOptions.length / CHUNK_SIZE);

console.log(`Translating ${uniqueOptions.length} unique options in ${totalChunks} chunks of ${CHUNK_SIZE}...`);

async function translateChunk(idx) {
  const outFile = path.join(outDir, `chunk_${idx}.json`);
  if (fs.existsSync(outFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(outFile, 'utf8'));
      if (Object.keys(data).length > 0) {
        console.log(`Chunk ${idx + 1}/${totalChunks} already cached.`);
        return data;
      }
    } catch {}
  }

  const start = idx * CHUNK_SIZE;
  const slice = uniqueOptions.slice(start, start + CHUNK_SIZE);

  const prompt = `Translate each of these Thai road sign / traffic test answer choices into:
1. "en": standard concise English traffic sign term / instruction.
2. "my": natural, accurate Myanmar / Burmese (မြန်မာဘာသာ) translation for driving test takers.

Input array of Thai phrases:
${JSON.stringify(slice, null, 2)}

Return a JSON object where the KEY is the exact original Thai string, and the VALUE is:
{ "en": "English translation", "my": "Burmese translation" }

IMPORTANT: Keep EVERY key exactly identical to the input string. Output ONLY the JSON object.`;

  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      console.log(`Translating chunk ${idx + 1}/${totalChunks} (items ${start + 1}..${start + slice.length}, attempt ${attempt})...`);
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text.trim());
      fs.writeFileSync(outFile, JSON.stringify(parsed, null, 2));
      console.log(`Saved chunk ${idx + 1}/${totalChunks} (${Object.keys(parsed).length} items)`);
      return parsed;
    } catch (err) {
      console.error(`Error on chunk ${idx + 1}, attempt ${attempt}:`, err.message);
      if (attempt === 5) throw err;
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

async function main() {
  const mergedDict = {};
  for (let i = 0; i < totalChunks; i++) {
    const chunkData = await translateChunk(i);
    Object.assign(mergedDict, chunkData);
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`All chunks done! Merged dictionary size: ${Object.keys(mergedDict).length}`);
  fs.writeFileSync('scripts/options_dict_all.json', JSON.stringify(mergedDict, null, 2));
}

main().catch(err => {
  console.error('Fatal error in translation:', err);
  process.exit(1);
});
