// components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { initials: 'JD', name: 'John Davis', title: 'CEO, TechStart Inc', feedback: 'InnovateTech transformed our entire digital presence. Their AI image generation saved us thousands in design costs.' },
  { initials: 'SM', name: 'Sarah Miller', title: 'CTO, Digital Dynamics', feedback: 'The quality of their web development is unmatched. Fast, reliable, and exactly what we needed.' },
  { initials: 'RK', name: 'Robert Kim', title: 'Founder, Creative Labs', feedback: 'Working with InnovateTech was a game-changer. Their innovation and expertise are truly exceptional.' },
  { initials: 'LP', name: 'Linda Park', title: 'UX Lead, PixelCraft', feedback: 'The designs were pixel-perfect. We received incredible feedback from our clients.' },
  { initials: 'AC', name: 'Andrew Cole', title: 'COO, NovaAI', feedback: 'The automation solutions from InnovateTech increased our team efficiency by 70%.' },
  { initials: 'TB', name: 'Tina Brooks', title: 'HR Manager, CloudCom', feedback: 'Recruiting has become a breeze thanks to the custom HR portals they built for us.' },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.title}</div>
                </div>
              </div>
              <p className="text-gray-300">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
