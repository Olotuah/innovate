// pages/ApplyPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Shield } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', position: '', resume: null, cover: '',
    city: '', state: '', zipCode: '', presentJob: '', country: '', gender: '', dateOfBirth: '', poBox: '', verifiedEmail: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const location = useLocation();
useEffect(() => {
  if (location.state?.position) {
    setFormData(prev => ({ ...prev, position: location.state.position }));
  }
}, [location]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      await axios.post('http://localhost:5000/api/apply', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setStatus('✅ Application submitted successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', position: '', resume: null, cover: '', city: '', state: '', zipCode: '', presentJob: '', country: '', gender: '', dateOfBirth: '', poBox: '', verifiedEmail: '' });
    } catch (error) {
      setStatus('❌ Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-6">Secure Application Portal</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="bg-white/5 px-4 py-3 rounded-lg" />
            <input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="bg-white/5 px-4 py-3 rounded-lg" />
          </div>
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full bg-white/5 px-4 py-3 rounded-lg" />

          <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="state" type="text" placeholder="State" value={formData.state} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="zipCode" type="text" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="presentJob" type="text" placeholder="Present Job" value={formData.presentJob} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="gender" type="text" placeholder="Gender" value={formData.gender} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="dateOfBirth" type="date" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="poBox" type="text" placeholder="P.O. Box" value={formData.poBox} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />
          <input name="verifiedEmail" type="email" placeholder="ID Verified Email" value={formData.verifiedEmail} onChange={handleChange} className="w-full bg-white/5 px-4 py-3 rounded-lg" />

          <select
  name="position"
  value={formData.position}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
>
  <option value="" className="bg-gray-900 text-white">Select Position</option>
  <option value="Senior AI Engineer" className="bg-gray-900 text-white">Senior AI Engineer</option>
  <option value="Full Stack Developer" className="bg-gray-900 text-white">Full Stack Developer</option>
  <option value="Product Designer" className="bg-gray-900 text-white">Product Designer</option>
  <option value="Data Entry Specialist" className="bg-gray-900 text-white">Data Entry Specialist</option>
  <option value="Customer Service Rep" className="bg-gray-900 text-white">Customer Service Rep</option>
  <option value="Data Analyst" className="bg-gray-900 text-white">Data Analyst</option>
</select>


          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-white">ID Verification Required</h4>
                <p className="text-sm text-gray-300">Secure identity verification to protect company assets</p>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              ⚠️ All applicants must create a profile and complete ID.me verification before application submission. This helps us prevent identity fraud.
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/20">
            <label className="block mb-2 text-sm">Upload Resume/CV</label>
            <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} className="text-white" />
          </div>

          <textarea
            name="cover"
            rows="4"
            placeholder="Cover Letter"
            value={formData.cover}
            onChange={handleChange}
            className="w-full bg-white/5 px-4 py-3 rounded-lg text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-lg font-semibold hover:shadow-xl"
          >
            Submit Application
          </button>
        </form>
        {status && <p className="text-center mt-4 text-sm text-green-400">{status}</p>}
      </div>
    </div>
  );
};

export default ApplyPage;
