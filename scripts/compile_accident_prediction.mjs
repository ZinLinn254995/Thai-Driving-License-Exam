import fs from 'fs';
import path from 'path';

async function translateChunk(items, targetLang) {
  if (items.length === 0) return [];
  const joined = items.join('\n');
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=th&tl=${targetLang}&dt=t&q=${encodeURIComponent(joined)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) {
    throw new Error(`Translation HTTP error: ${res.status}`);
  }
  const data = await res.json();
  const rawText = data[0].map(s => s[0]).join('');
  const split = rawText.split('\n');
  if (split.length !== items.length) {
    // fallback item by item
    console.warn(`Mismatch in chunk split (${split.length} vs ${items.length}). Falling back to individual translation...`);
    const individual = [];
    for (const item of items) {
      const u = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=th&tl=${targetLang}&dt=t&q=${encodeURIComponent(item)}`;
      const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const d = await r.json();
      individual.push(d[0].map(s => s[0]).join('').trim());
      await new Promise(res => setTimeout(res, 50));
    }
    return individual;
  }
  return split.map(s => s.trim());
}

async function run() {
  const htmlPath = path.join(process.cwd(), 'article_23.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('article_23.html not found');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Load existing dictionary if available
  const cacheFile = path.join(process.cwd(), 'scripts', 'accident_translations_cache.json');
  let cache = {};
  if (fs.existsSync(cacheFile)) {
    try {
      cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    } catch {}
  }

  // Also check existing options dictionary
  const optDictFile = path.join(process.cwd(), 'scripts', 'options_dict_all.json');
  if (fs.existsSync(optDictFile)) {
    try {
      const optDict = JSON.parse(fs.readFileSync(optDictFile, 'utf8'));
      for (const [k, v] of Object.entries(optDict)) {
        if (!cache[k] && v.en && v.my) {
          cache[k] = v;
        }
      }
    } catch {}
  }

  const re = /<li style="margin-bottom: 30px;">([\s\S]*?)<\/ul>\s*<\/li>/g;
  let match;
  const rawQuestions = [];
  let idx = 0;

  while ((match = re.exec(html)) !== null) {
    idx++;
    const block = match[1];

    const qMatch = block.match(/<label[^>]*>([\s\S]*?)<\/label>/) || block.match(/<b[^>]*>([\s\S]*?)<\/b>/);
    let qRaw = qMatch ? qMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    const qText = qRaw.replace(/^\d+[\.\)\s]+/, '').trim();

    const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
    let image = null;
    if (imgMatch) {
      const rawUrl = imgMatch[1].trim();
      const filename = path.basename(new URL(rawUrl.startsWith('http') ? rawUrl : 'https://thaidriveexam.com/' + rawUrl).pathname);
      image = `/exam_images/accident/${filename}`;
    }

    const ulIdx = block.indexOf('<ul');
    let options = [];
    if (ulIdx !== -1) {
      const ulContent = block.slice(ulIdx);
      const optRegex = /<li([^>]*)>([\s\S]*?)<\/li>/g;
      let optMatch;
      while ((optMatch = optRegex.exec(ulContent)) !== null) {
        const attrs = optMatch[1];
        const text = optMatch[2].replace(/<[^>]+>/g, '').trim();
        const isCorrect = attrs.includes('#0f08f5') || attrs.includes('color:') || attrs.includes('color :');
        options.push({ text, isCorrect });
      }
    }

    rawQuestions.push({
      originalNumber: idx,
      q_th: qText,
      image,
      options
    });
  }

  console.log(`Parsed ${rawQuestions.length} raw questions.`);

  // Collect all unique Thai strings needing translation
  const uniqueStrings = new Set();
  for (const q of rawQuestions) {
    if (!cache[q.q_th]) uniqueStrings.add(q.q_th);
    for (const opt of q.options) {
      if (!cache[opt.text]) uniqueStrings.add(opt.text);
    }
  }

  console.log(`Unique strings needing translation: ${uniqueStrings.size} (already cached: ${Object.keys(cache).length})`);

  const listToTranslate = Array.from(uniqueStrings);
  const CHUNK_SIZE = 15;
  for (let i = 0; i < listToTranslate.length; i += CHUNK_SIZE) {
    const chunk = listToTranslate.slice(i, i + CHUNK_SIZE);
    console.log(`Translating chunk ${Math.floor(i / CHUNK_SIZE) + 1} / ${Math.ceil(listToTranslate.length / CHUNK_SIZE)} (${chunk.length} items)...`);

    try {
      const [enTranslations, myTranslations] = await Promise.all([
        translateChunk(chunk, 'en'),
        translateChunk(chunk, 'my')
      ]);

      for (let j = 0; j < chunk.length; j++) {
        cache[chunk[j]] = {
          en: enTranslations[j] || chunk[j],
          my: myTranslations[j] || chunk[j]
        };
      }
      fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
      await new Promise(res => setTimeout(res, 200));
    } catch (err) {
      console.error(`Error in chunk ${i}:`, err.message);
      // Wait longer on error
      await new Promise(res => setTimeout(res, 1000));
    }
  }

  // Build finalized questions (IDs start from 522 to 598)
  const START_ID = 522;
  const compiled = rawQuestions.map((q, qIndex) => {
    const qTrans = cache[q.q_th] || { en: q.q_th, my: q.q_th };
    return {
      id: START_ID + qIndex,
      category: 'accident_prediction',
      image: q.image,
      q_th: q.q_th,
      q_en: qTrans.en,
      q_my: qTrans.my,
      options: q.options.map(opt => {
        const optTrans = cache[opt.text] || { en: opt.text, my: opt.text };
        return {
          th: opt.text,
          en: optTrans.en,
          my: optTrans.my,
          image: null,
          isCorrect: opt.isCorrect
        };
      })
    };
  });

  const outJson = path.join(process.cwd(), 'src', 'data', 'questions_accident_prediction.json');
  fs.writeFileSync(outJson, JSON.stringify(compiled, null, 2));
  console.log(`Saved ${compiled.length} compiled questions to ${outJson}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
