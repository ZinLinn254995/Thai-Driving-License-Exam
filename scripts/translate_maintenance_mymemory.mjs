import fs from 'fs';
import path from 'path';
import Rabbit from 'rabbit-node';

const cacheFile = path.join(process.cwd(), 'scripts', 'maintenance_translations_cache.json');
let cache = {};
if (fs.existsSync(cacheFile)) {
  try {
    const raw = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    for (const [k, v] of Object.entries(raw)) {
      if (v.en && v.en !== k) {
        cache[k] = v;
      }
    }
  } catch {}
}

const html = fs.readFileSync('article_17_raw.html', 'utf8');
const re = /<li style="margin-bottom: 30px;">([\s\S]*?)<\/ul>\s*<\/li>/g;
let match;
const allStringsSet = new Set();
const rawQuestions = [];
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
const needing = list.filter(s => !cache[s]);
console.log(`Total unique strings: ${list.length}. Already cached: ${Object.keys(cache).length}. Needing translation: ${needing.length}`);

async function translateText(text) {
  try {
    const urlEn = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=th|en';
    const resEn = await fetch(urlEn);
    const dataEn = await resEn.json();
    let rawEn = dataEn.responseData?.translatedText;
    let en = typeof rawEn === 'string' ? rawEn.replace(/^[\s\.\)\(\d+]+/, '').trim() : String(text);
    if (en.length > 0) en = en.charAt(0).toUpperCase() + en.slice(1);

    const urlMy = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(en) + '&langpair=en|my';
    const resMy = await fetch(urlMy);
    const dataMy = await resMy.json();
    let rawMy = dataMy.responseData?.translatedText;
    let zgMy = typeof rawMy === 'string' ? rawMy : en;
    let my = Rabbit.zg2uni(zgMy).replace(/^[\s\.\)\(\d+]+/, '').trim();

    return { en, my };
  } catch (err) {
    console.error('Translation error for:', text, err.message);
    return { en: text, my: text };
  }
}

async function start() {
  let done = Object.keys(cache).length;
  for (let i = 0; i < needing.length; i++) {
    const s = needing[i];
    try {
      const trans = await translateText(s);
      cache[s] = trans;
      done++;

      if (done % 15 === 0 || i === needing.length - 1) {
        console.log(`Translated ${done}/${list.length} items (${Math.round((done / list.length) * 100)}%)...`);
        fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
      }
    } catch (e) {
      console.warn('Item error:', e.message);
      cache[s] = { en: s, my: s };
    }

    await new Promise(r => setTimeout(r, 80));
  }

  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
  console.log('Finished translating all maintenance strings!');

  // Now compile questions
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
  console.log(`Saved ${maintenanceQuestions.length} maintenance questions to ${outJson}`);

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
  console.log('Successfully updated src/data/questions.ts to 521 questions!');
}

start().catch(console.error);
