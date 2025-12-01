import { QuizOption, QuizOptionId, QuizResultData } from './types';

export const QUIZ_OPTIONS: QuizOption[] = [
  { id: 'carnaval', label: 'NO CARNAVAL', icon: '🎭' },
  { id: 'tinder', label: 'NO TINDER', icon: '🔥' },
  { id: 'casa', label: 'EM CASA', icon: '🏠' },
];

export const RESULTS: Record<QuizOptionId, QuizResultData> = {
  carnaval: {
    headline: "A FOLIA PEDE PITÚ!",
    subtext: "O amor está na alegria do bloco.",
    imageKeyword: "carnival",
    cta: "CAIA NA FOLIA"
  },
  tinder: {
    headline: "DEU MATCH COM PITÚ!",
    subtext: "O par perfeito para brindar.",
    imageKeyword: "cocktail",
    cta: "PEÇA AGORA"
  },
  casa: {
    headline: "RELAX COM PITÚ!",
    subtext: "O melhor bar é o seu sofá.",
    imageKeyword: "relax",
    cta: "RECEBA EM CASA"
  }
};

export const BRAND_COLORS = {
  red: '#d42426',
  yellow: '#fbbf24', // Amber 400
  black: '#1f2937'
};