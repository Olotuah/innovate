// pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'SuperSecret123') {
      localStorage.setItem('admin_token', 'verified');
      navigate('/admin');
    } else {
      setError('❌ Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full px-4 py-3 rounded bg-white/10 mb-4 text-white"
        />
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
