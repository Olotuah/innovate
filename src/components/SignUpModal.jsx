// components/SignUpModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

const SignUpModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-800 text-white rounded-2xl w-full max-w-md p-6 relative border border-white/20">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/20 text-white"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/20 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/20 text-white"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 text-cyan-400 hover:underline"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
