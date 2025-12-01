import React from 'react';
import Banner from './components/Banner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 p-8 gap-8">
      
      {/* Presentation Wrapper */}
      <div className="text-center space-y-2">
        <h1 className="text-white text-2xl font-bold font-poppins">Creative Preview</h1>
        <p className="text-gray-400 text-sm">Format: 336x280 (IAB Rectangle)</p>
      </div>

      {/* The Ad Slot */}
      <div className="relative group">
        {/* Border indicator to show exact dimensions */}
        <div className="absolute -inset-4 border border-dashed border-gray-700 rounded-xl pointer-events-none">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-gray-500 text-xs px-2">336px</span>
            <span className="absolute top-1/2 -left-3 -translate-y-1/2 -rotate-90 bg-gray-900 text-gray-500 text-xs px-2">280px</span>
        </div>
        
        {/* The Actual Component */}
        <Banner />
      </div>

      <div className="text-gray-500 text-xs max-w-md text-center">
        Note: Images are placeholders from picsum.photos. In production, these would be optimized brand assets.
      </div>

    </div>
  );
};

export default App;