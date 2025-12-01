export type QuizOptionId = 'carnaval' | 'tinder' | 'casa';

export interface QuizOption {
  id: QuizOptionId;
  label: string;
  icon: string;
}

export type BannerState = 'intro' | 'quiz' | 'result';

export interface QuizResultData {
  headline: string;
  subtext: string;
  imageKeyword: string;
  cta: string;
}