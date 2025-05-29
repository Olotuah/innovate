// components/Footer.jsx
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-400">InnovateTech</h3>
          <p className="text-sm text-gray-400">
            Empowering businesses through AI innovation and digital transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-purple-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#careers" className="hover:text-cyan-400">Careers</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-purple-400">Contact</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" /> +44 800 683 0916
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" /> support@innovatetech.ai
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> Tx, USA.
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-purple-400">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400"><Facebook /></a>
            <a href="#" className="hover:text-cyan-400"><Twitter /></a>
            <a href="#" className="hover:text-cyan-400"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} InnovateTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
