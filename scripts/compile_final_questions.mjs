import fs from 'fs';

const questions = JSON.parse(fs.readFileSync('questions_th.json', 'utf8'));
const qMap = JSON.parse(fs.readFileSync('scripts/question_map.json', 'utf8'));
const optDict = JSON.parse(fs.readFileSync('scripts/options_dict_all.json', 'utf8'));

console.log(`Compiling ${questions.length} questions...`);

let missingOpts = 0;
const compiled = questions.map((q) => {
  const qMeta = qMap[q.q_th] || {
    en: q.q_th,
    my: q.q_th
  };

  const compiledOptions = q.options.map((opt) => {
    const tr = optDict[opt.th];
    if (!tr) {
      missingOpts++;
      console.warn(`Missing translation for option: "${opt.th}"`);
    }
    return {
      th: opt.th,
      en: tr?.en || opt.th,
      my: tr?.my || opt.th,
      isCorrect: opt.isCorrect
    };
  });

  return {
    id: q.id,
    image: q.image,
    q_th: q.q_th,
    q_en: qMeta.en,
    q_my: qMeta.my,
    options: compiledOptions
  };
});

console.log(`Compilation complete. Missing option translations: ${missingOpts}`);
fs.writeFileSync('src/data/questions.json', JSON.stringify(compiled, null, 2));

// Also export as TypeScript for type safety and direct import
const tsContent = `// Auto-generated 117 Thai Driving Test Traffic Sign Questions
// Source: https://thaidriveexam.com/article-1000000000015

export interface QuestionOption {
  th: string;
  en: string;
  my: string;
  isCorrect: boolean;
}

export interface QuestionItem {
  id: number;
  image: string;
  q_th: string;
  q_en: string;
  q_my: string;
  options: QuestionOption[];
}

export const QUESTIONS_BANK: QuestionItem[] = ${JSON.stringify(compiled, null, 2)};
`;

fs.writeFileSync('src/data/questions.ts', tsContent);
console.log('Saved src/data/questions.json and src/data/questions.ts!');
