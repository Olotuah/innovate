// components/Careers.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import jobDescriptions from '../data/jobDescriptions';

const Careers = () => {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future. We're hiring exceptional talent to build tomorrow's technology today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobDescriptions.map((job, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                <span>{job.dept}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
              <button
                onClick={() => navigate(`/jobs/${encodeURIComponent(job.title)}`)}
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View Job →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
