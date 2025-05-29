// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About InnovateTech
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, InnovateTech has been at the forefront of AI innovation, helping businesses transform their digital presence through cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our mission is to democratize AI technology, making it accessible to businesses of all sizes while maintaining the highest standards of quality and security.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Innovation-driven development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Customer-centric approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Security and reliability first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
