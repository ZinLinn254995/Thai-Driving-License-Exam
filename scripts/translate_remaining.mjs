import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI();
const uniqueOptions = JSON.parse(fs.readFileSync('scripts/options_unique.json', 'utf8'));
const outDir = path.join(process.cwd(), 'scripts', 'opt_dict');

const CHUNK_SIZE = 35;
const totalChunks = Math.ceil(uniqueOptions.length / CHUNK_SIZE);

// Re-index based on CHUNK_SIZE = 35 or check existing
// Let's just translate whatever keys are missing from existing chunks!
const existingDict = {};
for (const file of fs.readdirSync(outDir)) {
  if (file.endsWith('.json')) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(outDir, file), 'utf8'));
      Object.assign(existingDict, data);
    } catch {}
  }
}

const existingKeys = new Set(Object.keys(existingDict));
const remainingKeys = uniqueOptions.filter(k => !existingKeys.has(k));

console.log(`Already translated: ${existingKeys.size} options.`);
console.log(`Remaining to translate: ${remainingKeys.length} options.`);

if (remainingKeys.length === 0) {
  console.log('All done!');
  fs.writeFileSync('scripts/options_dict_all.json', JSON.stringify(existingDict, null, 2));
  process.exit(0);
}

// Slice remaining into chunks of 30
const REM_CHUNK = 30;
const remChunks = [];
for (let i = 0; i < remainingKeys.length; i += REM_CHUNK) {
  remChunks.push(remainingKeys.slice(i, i + REM_CHUNK));
}

console.log(`Processing ${remChunks.length} remaining chunks...`);

for (let i = 0; i < remChunks.length; i++) {
  const slice = remChunks[i];
  console.log(`Translating batch ${i + 1}/${remChunks.length} (${slice.length} items)...`);
  
  const prompt = `Translate each of these Thai road sign / traffic test answer choices into:
1. "en": standard concise English traffic sign term / instruction.
2. "my": natural, accurate Myanmar / Burmese (မြန်မာဘာသာ) translation for driving test takers.

Input array of Thai phrases:
${JSON.stringify(slice, null, 2)}

Return a JSON object where the KEY is the exact original Thai string, and the VALUE is:
{ "en": "English translation", "my": "Burmese translation" }

IMPORTANT: Keep EVERY key exactly identical to the input string. Output ONLY the JSON object.`;

  let success = false;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const model = attempt % 2 === 1 ? 'gemini-3.8-flash' : 'gemini-3.1-flash-lite';
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });
      const parsed = JSON.parse(response.text.trim());
      Object.assign(existingDict, parsed);
      fs.writeFileSync(path.join(outDir, `rem_${i}.json`), JSON.stringify(parsed, null, 2));
      console.log(`Batch ${i + 1}/${remChunks.length} succeeded with ${model}. Total so far: ${Object.keys(existingDict).length}`);
      success = true;
      break;
    } catch (e) {
      console.error(`Attempt ${attempt} on batch ${i + 1} with ${model} failed:`, e.status || e.message);
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }

  if (!success) {
    console.error(`Failed to translate batch ${i + 1}`);
  }
  await new Promise(r => setTimeout(r, 500));
}

fs.writeFileSync('scripts/options_dict_all.json', JSON.stringify(existingDict, null, 2));
console.log(`Final dictionary saved with ${Object.keys(existingDict).length} options!`);
