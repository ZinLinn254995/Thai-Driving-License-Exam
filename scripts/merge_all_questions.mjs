import fs from 'fs';

// Load the 117 sign questions
const signQuestions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

// Load the 74 law questions
const lawQuestions = JSON.parse(fs.readFileSync('src/data/questions_law.json', 'utf8'));

console.log(`Signs count: ${signQuestions.length}, Laws count: ${lawQuestions.length}`);

// Ensure category is set on sign questions
const normalizedSigns = signQuestions.map((q, idx) => ({
  id: idx + 1,
  category: 'traffic_signs',
  image: q.image || null,
  q_th: q.q_th,
  q_en: q.q_en,
  q_my: q.q_my,
  options: q.options.map((opt) => ({
    th: opt.th,
    en: opt.en,
    my: opt.my,
    image: null,
    isCorrect: opt.isCorrect
  }))
}));

// Ensure IDs for law questions continue from 118 to 191
const normalizedLaws = lawQuestions.map((q, idx) => ({
  id: 117 + idx + 1,
  category: 'traffic_laws',
  image: q.image || null,
  q_th: q.q_th,
  q_en: q.q_en,
  q_my: q.q_my,
  options: q.options.map((opt) => ({
    th: opt.th,
    en: opt.en,
    my: opt.my,
    image: opt.image || null,
    isCorrect: opt.isCorrect
  }))
}));

const allQuestions = [...normalizedSigns, ...normalizedLaws];
console.log(`Total merged questions: ${allQuestions.length}`);

fs.writeFileSync('src/data/questions.json', JSON.stringify(allQuestions, null, 2));

const tsContent = `// Auto-generated 191 Thai Driving Test Questions
// Topic 1: Traffic Signs and Markings (117 Questions) - https://thaidriveexam.com/article-1000000000015
// Topic 2: Traffic Laws (74 Questions) - https://thaidriveexam.com/article-1000000000016

export type QuestionCategory = 'traffic_signs' | 'traffic_laws';

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
  }
};

export const QUESTIONS_BANK: QuestionItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync('src/data/questions.ts', tsContent);
console.log('Saved src/data/questions.json and src/data/questions.ts successfully!');
