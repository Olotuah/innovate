// pages/JobDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobDescriptions from '../data/jobDescriptions';

const JobDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  // Decode title param and find the matching job in the array
  const decoded = decodeURIComponent(title);
  const job = jobDescriptions.find(j => j.title === decoded);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="text-xl text-red-400">🚫 Job not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-400 mb-1">
          {job.dept} • {job.type} • {job.location}
        </p>
        <p className="text-cyan-400 font-semibold mb-6">Compensation: {job.salary}</p>
        <pre className="whitespace-pre-wrap text-gray-200 bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
          {job.description}
        </pre>
        <button
          onClick={() => navigate('/apply', { state: { position: job.title } })}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl"
        >
          Apply for this Position
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
