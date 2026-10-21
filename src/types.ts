// Type definitions for Thai Driving Test App

export type LanguageMode = 'th_my' | 'en_my';

export type ExamMode = 'instant' | 'timed';

export type QuestionCategory = 'traffic_signs' | 'traffic_laws' | 'safe_driving';

export type ExamTopicFilter = 'all' | 'traffic_signs' | 'traffic_laws' | 'safe_driving';

export interface QuizQuestionOption {
  th: string;
  en: string;
  my: string;
  image?: string | null;
  isCorrect: boolean;
  originalIndex: number;
}

export interface QuizQuestion {
  id: number;
  category: QuestionCategory;
  image?: string | null;
  q_th: string;
  q_en: string;
  q_my: string;
  options: QuizQuestionOption[];
}

export interface UserAnswer {
  questionId: number;
  selectedOptionIndex: number;
  isCorrect: boolean;
}
