// pages/ApplyPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Shield } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ApplyPage = () => {
  const apiBase = process.env.REACT_APP_API_URL; 
  // e.g. https://innovate-production.up.railway.app

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    cover: '',
    city: '',
    state: '',
    zipCode: '',
    presentJob: '',
    country: '',
    gender: '',
    dateOfBirth: '',
    poBox: '',
    verifiedEmail: '',
  });

  const [status, setStatus] = useState(null);
  const location = useLocation();

  // Pre-fill position if routed from JobDetails
  useEffect(() => {
    if (location.state?.position) {
      setFormData(prev => ({ ...prev, position: location.state.position }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val);
      });

      await axios.post(
        `${apiBase}/api/apply`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setStatus('✅ Application submitted successfully!');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', position: '',
        resume: null, cover: '', city: '', state: '', zipCode: '',
        presentJob: '', country: '', gender: '', dateOfBirth: '',
        poBox: '', verifiedEmail: ''
      });
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('❌ Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-6">Secure Application Portal</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-white/5 px-4 py-3 rounded-lg"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-white/5 px-4 py-3 rounded-lg"
            />
          </div>

          {/* Contact */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />

          {/* Address & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} className="bg-white/5 px-4 py-3 rounded-lg" />
            <input name="state" type="text" placeholder="State" value={formData.state} onChange={handleChange} className="bg-white/5 px-4 py-3 rounded-lg" />
            <input name="zipCode" type="text" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} className="bg-white/5 px-4 py-3 rounded-lg" />
            <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleChange} className="bg-white/5 px-4 py-3 rounded-lg" />
          </div>

          {/* Job & Verification */}
          <input
            name="presentJob"
            type="text"
            placeholder="Present Job"
            value={formData.presentJob}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />
          <input
            name="gender"
            type="text"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />
          <input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />
          <input
            name="poBox"
            type="text"
            placeholder="P.O. Box"
            value={formData.poBox}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />
          <input
            name="verifiedEmail"
            type="email"
            placeholder="ID Verified Email"
            value={formData.verifiedEmail}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg"
          />

          {/* Position Selector */}
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
          >
            <option value="">Select Position</option>
            {[
              'Senior AI Engineer',
              'Full Stack Developer',
              'Product Designer',
              'Data Entry Specialist',
              'Customer Service Rep',
              'Data Analyst'
            ].map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>

          {/* ID Verification Notice */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-white">ID Verification Required</h4>
                <p className="text-sm text-gray-300">Complete ID.me verification before submission.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              ⚠️ This helps us prevent identity fraud.
            </p>
          </div>

          {/* Resume Upload */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/20">
            <label className="block mb-2 text-sm">Upload Resume/CV</label>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="text-white"
              required
            />
          </div>

          {/* Cover Letter */}
          <textarea
            name="cover"
            rows="4"
            placeholder="Cover Letter"
            value={formData.cover}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg text-white"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-lg font-semibold hover:shadow-xl"
          >
            Submit Application
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className={`text-center mt-4 text-sm ${status.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplyPage;
