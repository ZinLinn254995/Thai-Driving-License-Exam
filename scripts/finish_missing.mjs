import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI();
const all = JSON.parse(fs.readFileSync('scripts/options_unique.json', 'utf8'));
const dir = path.join(process.cwd(), 'scripts', 'opt_dict');

const existingDict = {};
for (const f of fs.readdirSync(dir)) {
  if (f.endsWith('.json')) {
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      Object.assign(existingDict, d);
    } catch {}
  }
}

const existingKeys = new Set(Object.keys(existingDict));
const missing = all.filter(k => !existingKeys.has(k));

console.log(`Missing to translate: ${missing.length}`);

if (missing.length === 0) {
  console.log('All 390 options already translated!');
  fs.writeFileSync('scripts/options_dict_all.json', JSON.stringify(existingDict, null, 2));
  process.exit(0);
}

const BATCH = 30;
for (let i = 0; i < missing.length; i += BATCH) {
  const slice = missing.slice(i, i + BATCH);
  console.log(`Translating missing slice ${i / BATCH + 1}... (${slice.length} items)`);

  const prompt = `Translate each of these Thai road sign / traffic test answer choices into:
1. "en": standard concise English traffic sign term / instruction.
2. "my": natural, accurate Myanmar / Burmese (မြန်မာဘာသာ) translation for driving test takers.

Input array of Thai phrases:
${JSON.stringify(slice, null, 2)}

Return a JSON object where KEY is the exact Thai phrase, and VALUE is:
{ "en": "English", "my": "Burmese" }

Output ONLY the valid JSON object.`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });
      const parsed = JSON.parse(res.text.trim());
      Object.assign(existingDict, parsed);
      fs.writeFileSync(path.join(dir, `finish_${i}.json`), JSON.stringify(parsed, null, 2));
      console.log(`Slice ${i / BATCH + 1} succeeded! Total dict now: ${Object.keys(existingDict).length}`);
      break;
    } catch (e) {
      console.error(`Attempt ${attempt} failed:`, e.status || e.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  await new Promise(r => setTimeout(r, 400));
}

fs.writeFileSync('scripts/options_dict_all.json', JSON.stringify(existingDict, null, 2));
console.log(`All done! Saved options_dict_all.json with ${Object.keys(existingDict).length} options.`);
