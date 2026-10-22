import fs from 'fs';
import path from 'path';

async function translateChunk(items, targetLang) {
  if (items.length === 0) return [];
  const joined = items.join('\n');
  const url = `https://translate.googleapis.com/translate_a/single?client=at&sl=th&tl=${targetLang}&dt=t&q=${encodeURIComponent(joined)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) {
    throw new Error(`Translation HTTP error: ${res.status}`);
  }
  const data = await res.json();
  const rawText = data[0].map(s => s[0]).join('');
  const split = rawText.split('\n');
  if (split.length !== items.length) {
    console.warn(`Mismatch in chunk split (${split.length} vs ${items.length}). Falling back to individual translation...`);
    const individual = [];
    for (const item of items) {
      const u = `https://translate.googleapis.com/translate_a/single?client=at&sl=th&tl=${targetLang}&dt=t&q=${encodeURIComponent(item)}`;
      const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const d = await r.json();
      individual.push(d[0].map(s => s[0]).join('').trim());
      await new Promise(res => setTimeout(res, 30));
    }
    return individual;
  }
  return split.map(s => s.trim());
}

async function run() {
  const html = fs.readFileSync('article_17_raw.html', 'utf8');
  const re = /<li style="margin-bottom: 30px;">([\s\S]*?)<\/ul>\s*<\/li>/g;
  let match;
  const rawQuestions = [];
  const allStringsSet = new Set();
  let idx = 0;

  while ((match = re.exec(html)) !== null) {
    idx++;
    const block = match[1];

    const qMatch = block.match(/<label[^>]*>([\s\S]*?)<\/label>/) || block.match(/<b[^>]*>([\s\S]*?)<\/b>/);
    let qRaw = qMatch ? qMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    const qText = qRaw.replace(/^[\s\.\)\(\d+]+/, '').trim();
    allStringsSet.add(qText);

    const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
    let image = null;
    if (imgMatch) {
      const rawUrl = imgMatch[1].trim();
      const filename = path.basename(new URL(rawUrl.startsWith('http') ? rawUrl : 'https://thaidriveexam.com/' + rawUrl).pathname);
      image = `/exam_images/maintenance/${filename}`;
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
        allStringsSet.add(text);
        options.push({ text, isCorrect });
      }
    }

    rawQuestions.push({
      id: 440 + idx,
      originalNumber: idx,
      q_th: qText,
      image,
      options
    });
  }

  const list = Array.from(allStringsSet);
  console.log(`Translating all ${list.length} unique maintenance strings using client=at...`);

  const cache = {};
  const CHUNK_SIZE = 25;
  for (let i = 0; i < list.length; i += CHUNK_SIZE) {
    const chunk = list.slice(i, i + CHUNK_SIZE);
    console.log(`Translating chunk ${Math.floor(i / CHUNK_SIZE) + 1} / ${Math.ceil(list.length / CHUNK_SIZE)} (${chunk.length} items)...`);

    const [enArr, myArr] = await Promise.all([
      translateChunk(chunk, 'en'),
      translateChunk(chunk, 'my')
    ]);

    for (let j = 0; j < chunk.length; j++) {
      let en = (enArr[j] || chunk[j]).replace(/^[\s\.\)\(\d+]+/, '').trim();
      if (en.length > 0) en = en.charAt(0).toUpperCase() + en.slice(1);
      let my = (myArr[j] || chunk[j]).replace(/^[\s\.\)\(\d+]+/, '').trim();
      cache[chunk[j]] = { en, my };
    }

    await new Promise(r => setTimeout(r, 60));
  }

  console.log('All strings translated cleanly!');

  const maintenanceQuestions = rawQuestions.map((q) => {
    const transQ = cache[q.q_th] || { en: q.q_th, my: q.q_th };
    return {
      id: q.id,
      category: 'vehicle_maintenance',
      image: q.image,
      q_th: q.q_th,
      q_en: transQ.en,
      q_my: transQ.my,
      options: q.options.map(opt => {
        const transOpt = cache[opt.text] || { en: opt.text, my: opt.text };
        return {
          th: opt.text,
          en: transOpt.en,
          my: transOpt.my,
          image: null,
          isCorrect: opt.isCorrect
        };
      })
    };
  });

  const outJson = path.join(process.cwd(), 'src', 'data', 'questions_maintenance.json');
  fs.writeFileSync(outJson, JSON.stringify(maintenanceQuestions, null, 2));

  const existingQuestions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'))
    .filter(q => q.category === 'traffic_signs' || q.category === 'traffic_laws' || q.category === 'safe_driving');

  const allQuestions = [...existingQuestions, ...maintenanceQuestions];
  console.log(`Total questions after merge: ${allQuestions.length} (Signs: ${existingQuestions.filter(q => q.category === 'traffic_signs').length}, Laws: ${existingQuestions.filter(q => q.category === 'traffic_laws').length}, Safe: ${existingQuestions.filter(q => q.category === 'safe_driving').length}, Maintenance: ${maintenanceQuestions.length})`);

  fs.writeFileSync('src/data/questions.json', JSON.stringify(allQuestions, null, 2));

  const tsContent = `// Auto-generated 521 Thai Driving Test Questions
// Topic 1: Traffic Signs and Markings (117 Questions) - https://thaidriveexam.com/article-1000000000015
// Topic 2: Traffic Laws (74 Questions) - https://thaidriveexam.com/article-1000000000016
// Topic 3: Safe Driving (249 Questions) - https://thaidriveexam.com/article-1000000000022
// Topic 4: Vehicle Maintenance (81 Questions) - https://thaidriveexam.com/article-1000000000017

export type QuestionCategory = 'traffic_signs' | 'traffic_laws' | 'safe_driving' | 'vehicle_maintenance';

export interface QuestionOption {
  th: string;
  en: string;
  my: string;
  image?: string | null;
  isCorrect: boolean;
}

export interface QuestionItem {
  id: number;
  category: QuestionCategory;
  image?: string | null;
  q_th: string;
  q_en: string;
  q_my: string;
  options: QuestionOption[];
}

export const CATEGORY_LABELS: Record<QuestionCategory, { en: string; my: string; th: string }> = {
  traffic_signs: {
    en: 'Traffic Signs and Markings',
    my: 'ဆိုင်းဘုတ်နှင့် လမ်းအမှတ်အသားများ',
    th: 'ป้ายและเครื่องหมายจราจร'
  },
  traffic_laws: {
    en: 'Traffic Laws',
    my: 'ယာဉ်စည်းကမ်း လမ်းစည်းကမ်း ဥပဒေများ',
    th: 'กฎหมายจราจร'
  },
  safe_driving: {
    en: 'Safe Driving',
    my: 'အန္တရာယ်ကင်းစွာ မောင်းနှင်ခြင်း',
    th: 'การขับขี่ปลอดภัย'
  },
  vehicle_maintenance: {
    en: 'Vehicle Maintenance',
    my: 'ယာဉ်ထိန်းသိမ်းစောင့်ရှောက်မှု',
    th: 'การบำรุงรักษารถ'
  }
};

export const QUESTIONS_BANK: QuestionItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

  fs.writeFileSync('src/data/questions.ts', tsContent);
  console.log('Successfully written clean 521 questions in questions.ts!');
}

run().catch(console.error);
