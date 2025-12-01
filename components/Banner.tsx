import React, { useState } from 'react';
import { QUIZ_OPTIONS, RESULTS } from '../constants';
import { QuizOptionId } from '../types';
import { QuizButton } from './QuizButton';
import { Loader2 } from 'lucide-react';

const Banner: React.FC = () => {
  const [view, setView] = useState<'question' | 'loading' | 'result'>('question');
  const [selection, setSelection] = useState<QuizOptionId | null>(null);

  const handleSelect = (id: string) => {
    setSelection(id as QuizOptionId);
    setView('loading');
    
    // Simulate API/Loading delay for dramatic effect
    setTimeout(() => {
      setView('result');
    }, 1200);
  };

  const handleReset = () => {
    setView('question');
    setSelection(null);
  };

  // Safe fallback if selection is null (shouldn't happen in result view)
  const resultData = selection ? RESULTS[selection] : RESULTS['carnaval'];

  return (
    <div className="relative w-[336px] h-[280px] bg-gradient-to-br from-yellow-400 to-yellow-500 overflow-hidden shadow-2xl border-2 border-yellow-600 font-poppins text-gray-900 select-none">
      
      {/* Background Decor Elements (Lobster Claws abstract) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

      {/* Header / Logo Area */}
      <div className="absolute top-0 w-full p-3 flex justify-between items-center z-20">
        <div className="flex items-center gap-1">
          <span className="text-2xl">🦞</span>
          <span className="font-bebas text-3xl text-red-700 tracking-widest drop-shadow-sm">PITÚ</span>
        </div>
      </div>

      {/* VIEW: QUESTION */}
      {view === 'question' && (
        <div className="absolute inset-0 pt-14 px-5 pb-4 flex flex-col justify-between z-10">
          <div className="text-center animate-pop-in">
            <h2 className="font-bebas text-4xl leading-none text-red-800 drop-shadow-sm mb-1">
              ONDE ANDA
              <br />
              <span className="text-white text-stroke-red">MEU AMOR?</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-2 mb-2">
            {QUIZ_OPTIONS.map((opt, idx) => (
              <QuizButton key={opt.id} option={opt} index={idx} onClick={handleSelect} />
            ))}
          </div>
        </div>
      )}

      {/* VIEW: LOADING */}
      {view === 'loading' && (
        <div className="absolute inset-0 z-20 bg-yellow-400/90 backdrop-blur-sm flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
          <p className="font-bebas text-xl text-red-700 mt-2 tracking-wide">PROCURANDO...</p>
        </div>
      )}

      {/* VIEW: RESULT */}
      {view === 'result' && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col">
           {/* Top Image Area */}
           <div className="h-[140px] w-full relative overflow-hidden bg-gray-100">
             <div className="absolute inset-0 bg-black/20 z-10"></div>
             <img 
               src={`https://picsum.photos/336/160?random=${selection}`} 
               alt="Mood"
               className="w-full h-full object-cover animate-pop-in" 
             />
             <div className="absolute bottom-2 left-4 z-20">
                <span className="bg-yellow-400 text-red-900 text-xs font-bold px-2 py-1 rounded shadow uppercase">
                  {selection === 'carnaval' ? 'No Bloquinho' : selection === 'tinder' ? 'No App' : 'Em Casa'}
                </span>
             </div>
           </div>

           {/* Content Area */}
           <div className="flex-1 p-4 flex flex-col items-center text-center justify-between bg-gradient-to-t from-gray-50 to-white">
              <div className="animate-slide-up">
                <h3 className="font-bebas text-3xl text-red-600 leading-none mb-1">
                  {resultData.headline}
                </h3>
                <p className="text-xs text-gray-600 px-2 leading-tight">
                  {resultData.subtext}
                </p>
              </div>

              <div className="w-full flex gap-2 items-center mt-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
                 <button 
                  onClick={handleReset}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                  aria-label="Voltar"
                 >
                   ↺
                 </button>
                 <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2 group">
                   <span>{resultData.cta}</span>
                   <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </button>
              </div>
           </div>
           
           {/* Branding Footer */}
           <div className="absolute top-2 right-2 z-20 drop-shadow-md">
              <span className="font-bebas text-white text-xl tracking-widest bg-red-600 px-2 py-0.5 transform -rotate-2 inline-block">PITÚ</span>
           </div>
        </div>
      )}

      {/* Legal Text (Always visible or visible on hover/end) */}
      <div className="absolute bottom-1 right-1 z-30 opacity-40 text-[8px] text-black pointer-events-none">
        BEBA COM MODERAÇÃO
      </div>
    </div>
  );
};

export default Banner;