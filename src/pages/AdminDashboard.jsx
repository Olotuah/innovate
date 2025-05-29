// pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Download, User } from 'lucide-react';

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();
  const apiBase = import.meta.env.VITE_API_URL; // e.g. https://your-railway-app.up.railway.app

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token !== 'verified') {
      navigate('/admin-login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`${apiBase}/api/applications`);
        setApplicants(res.data);
      } catch (err) {
        console.error('Failed to load applicants:', err);
      }
    };
    fetchApplicants();
  }, [apiBase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants.map(app => (
            <div
              key={app._id}
              className="bg-slate-800 rounded-xl p-6 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <User className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="font-semibold text-lg">
                    {app.firstName} {app.lastName}
                  </p>
                  <p className="text-sm text-gray-400">{app.email}</p>
                </div>
              </div>
              <p className="text-sm mb-2">
                <span className="font-medium text-purple-400">Phone:</span> {app.phone}
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium text-purple-400">Position:</span> {app.position}
              </p>
              <p className="text-sm mb-4 text-gray-300">
                <span className="font-medium text-purple-400">Cover Letter:</span>{' '}
                {app.cover || 'N/A'}
              </p>
              <a
                href={`${apiBase}${app.resume}`}
                download
                className="inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
