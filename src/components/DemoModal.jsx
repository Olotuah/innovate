// components/DemoModal.jsx
import React from 'react';
import { X, Play } from 'lucide-react';

const DemoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-3xl w-full border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Product Demo</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden mb-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={onClose} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-full font-semibold">
          Close Demo
        </button>
      </div>
    </div>
  );
};

export default DemoModal;
