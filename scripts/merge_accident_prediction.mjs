import fs from 'fs';

const existing = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
const accident = JSON.parse(fs.readFileSync('src/data/questions_accident_prediction.json', 'utf8'));

console.log(`Existing questions: ${existing.length}, New Accident Prediction questions: ${accident.length}`);

// Normalize and verify IDs
const normalizedAccident = accident.map((q, idx) => ({
  id: existing.length + idx + 1,
  category: 'accident_prediction',
  image: q.image || null,
  q_th: q.q_th,
  q_en: q.q_en,
  q_my: q.q_my,
  options: q.options.map(opt => ({
    th: opt.th,
    en: opt.en,
    my: opt.my,
    image: opt.image || null,
    isCorrect: opt.isCorrect
  }))
}));

const allQuestions = [...existing, ...normalizedAccident];
console.log(`Total questions after merge: ${allQuestions.length}`);

fs.writeFileSync('src/data/questions.json', JSON.stringify(allQuestions, null, 2));

const tsContent = `// Auto-generated 598 Thai Driving Test Questions
// Topic 1: Traffic Signs and Markings (117 Questions) - https://thaidriveexam.com/article-1000000000015
// Topic 2: Traffic Laws (74 Questions) - https://thaidriveexam.com/article-1000000000016
// Topic 3: Safe Driving (249 Questions) - https://thaidriveexam.com/article-1000000000022
// Topic 4: Vehicle Maintenance (81 Questions) - https://thaidriveexam.com/article-1000000000017
// Topic 5: Accident Prediction (77 Questions) - https://thaidriveexam.com/article-1000000000023

export type QuestionCategory = 'traffic_signs' | 'traffic_laws' | 'safe_driving' | 'vehicle_maintenance' | 'accident_prediction';

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
  },
  accident_prediction: {
    en: 'Accident Prediction',
    my: 'မတော်တဆမှု ကြိုတင်ခန့်မှန်းခြင်း',
    th: 'การคาดการณ์อุบัติเหตุ'
  }
};

export const QUESTIONS_BANK: QuestionItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync('src/data/questions.ts', tsContent);
console.log('Saved src/data/questions.json and src/data/questions.ts successfully!');
