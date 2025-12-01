import React from 'react';
import { QuizOption } from '../types';

interface QuizButtonProps {
  option: QuizOption;
  onClick: (id: string) => void;
  index: number;
}

export const QuizButton: React.FC<QuizButtonProps> = ({ option, onClick, index }) => {
  return (
    <button
      onClick={() => onClick(option.id)}
      className="w-full bg-white hover:bg-yellow-100 text-red-700 font-bold py-3 px-4 rounded-full shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-between group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="font-poppins text-sm uppercase tracking-wider">{option.label}</span>
      <span className="text-xl group-hover:rotate-12 transition-transform">{option.icon}</span>
    </button>
  );
};