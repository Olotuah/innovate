// components/Navbar.jsx
import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ onSignupClick, onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleNavClick = (section) => {
    setMenuOpen(false);
    onScrollTo(section);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onScrollTo('hero')}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              InnovateTech
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onScrollTo('services')} className="hover:text-cyan-400 transition-colors">
              Services
            </button>
            <button onClick={() => onScrollTo('about')} className="hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => onScrollTo('careers')} className="hover:text-cyan-400 transition-colors">
              Careers
            </button>
            <a href="/admin" className="hover:text-pink-400 transition-colors font-medium">
              Admin
            </a>
            <button
              onClick={onSignupClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4">
          <button onClick={() => handleNavClick('services')} className="block w-full text-left text-white hover:text-cyan-400">
            Services
          </button>
          <button onClick={() => handleNavClick('about')} className="block w-full text-left text-white hover:text-cyan-400">
            About
          </button>
          <button onClick={() => handleNavClick('careers')} className="block w-full text-left text-white hover:text-cyan-400">
            Careers
          </button>
          <a href="/admin" className="block w-full text-left text-white hover:text-pink-400">
            Admin
          </a>
          <button
            onClick={() => { setMenuOpen(false); onSignupClick(); }}
            className="block w-full text-left text-white bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
