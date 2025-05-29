// components/Services.jsx
import React from 'react';
import { Sparkles, Globe } from 'lucide-react';

const Services = ({ onStartCreating, onWatchDemo, onTryAIGen, onStartProject, additionalTech = [] }) => {
  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python',
    ...additionalTech
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets innovative design. We're crafting digital experiences that transform businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">AI Image Generation</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Stunning, high-resolution images from simple text prompts. Great for marketing, branding, and creative projects.
            </p>
            <button onClick={onTryAIGen} className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold">
              Try AI Generator
            </button>
          </div>

          <div className="group bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Premium Web Development</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Full-stack builds with React, Next.js & more. We design performant, scalable, elegant web solutions.
            </p>
            <button onClick={onStartProject} className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full font-semibold">
              Start Project
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 mb-20 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Powered by Cutting-Edge Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <div key={tech} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
                <div className="text-lg font-semibold text-white">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button onClick={onStartCreating} className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold">
            Start Creating
          </button>
          <button onClick={onWatchDemo} className="ml-6 border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
