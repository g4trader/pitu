import React, { useState } from 'react';
import Banner from './components/Banner';
import { FileText, ClipboardList, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'specs'>('preview');

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-900 font-poppins text-gray-100">
      
      {/* Header */}
      <header className="w-full p-6 border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-3xl">🦞</span> Pitú Creative Preview
            </h1>
            <p className="text-gray-400 text-sm mt-1">Campanha: "Onde anda meu amor?"</p>
          </div>
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'preview' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'specs' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <ClipboardList size={16} />
              Especificações
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl p-8 flex flex-col items-center">
        
        {activeTab === 'preview' && (
          <div className="animate-slide-up w-full flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Visualização do Banner</h2>
              <p className="text-gray-500 text-sm">Formato: 336x280 (IAB Rectangle)</p>
            </div>

            {/* The Ad Slot Wrapper */}
            <div className="relative group p-12 bg-gray-800/50 rounded-2xl border border-gray-700 shadow-2xl">
              {/* Dimensions Indicators */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-600 text-xs font-mono">336px</div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-gray-600 text-xs font-mono">280px</div>
              
              {/* The Actual Component */}
              <div className="border-4 border-dashed border-gray-700/50">
                 <Banner />
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 max-w-lg text-center">
              <p className="text-yellow-500 text-sm">
                ⚠️ Nota: As imagens utilizadas são placeholders (picsum.photos). 
                Na versão final para a agência, substituir pelos assets oficiais da Pitú.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="w-full animate-slide-up grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tech Specs Card */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dados Técnicos</h3>
                  <p className="text-xs text-gray-400">Para desenvolvedores/mídia</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex justify-between">
                  <span className="text-gray-500">Dimensões:</span>
                  <span className="font-mono text-white bg-gray-900 px-2 py-0.5 rounded">336x280 px</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Formato:</span>
                  <span className="text-white">HTML5 (React/Vanilla)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Peso Máx (Zip):</span>
                  <span className="text-white">150KB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Fontes:</span>
                  <span className="text-white">Bebas Neue, Poppins</span>
                </li>
                 <li className="flex justify-between">
                  <span className="text-gray-500">ClickTag:</span>
                  <span className="text-green-400">Requerido (Padrão IAB)</span>
                </li>
              </ul>
            </div>

            {/* Creative Logic Card */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                 <div className="p-2 bg-red-500/10 rounded-lg">
                  <CheckCircle2 className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Lógica do Quiz</h3>
                  <p className="text-xs text-gray-400">Fluxo de telas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Pergunta</p>
                  <p className="text-white text-sm bg-gray-900 p-2 rounded border border-gray-700">"Onde anda meu amor?"</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Opções & CTAs</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
                       <span className="text-gray-300">Carnaval → <span className="text-white">"Caia na Folia"</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                       <span className="text-gray-300">Tinder → <span className="text-white">"Peça Agora"</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                       <span className="text-gray-300">Casa → <span className="text-white">"Receba em Casa"</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="md:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
               <span className="text-sm text-gray-400 font-medium">Paleta Hexadecimal:</span>
               <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg shadow-sm border border-gray-600" style={{background: '#d42426'}}></div>
                    <span className="text-xs text-gray-500 font-mono">#d42426</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg shadow-sm border border-gray-600" style={{background: '#fbbf24'}}></div>
                    <span className="text-xs text-gray-500 font-mono">#fbbf24</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg shadow-sm border border-gray-600" style={{background: '#1f2937'}}></div>
                    <span className="text-xs text-gray-500 font-mono">#1f2937</span>
                  </div>
               </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
};

export default App;