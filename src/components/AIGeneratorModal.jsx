// components/AIGeneratorModal.jsx
import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

const AIGeneratorModal = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (prompt.trim() !== '') {
      setGenerated(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-xl w-full border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">AI Image Generator</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Describe your image..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white mb-4"
        />
        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center border border-white/10 mb-4">
          {generated ? (
            <img
              src="https://placekitten.com/400/300"
              alt="Generated AI"
              className="rounded-lg shadow-md"
            />
          ) : (
            <>
              <Sparkles className="w-12 h-12 text-cyan-400 mb-2" />
              <p className="text-gray-400">Your generated image will appear here</p>
            </>
          )}
        </div>
        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-full font-semibold"
        >
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default AIGeneratorModal;
