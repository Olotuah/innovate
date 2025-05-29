// components/ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStatus('Message logged in console (no server yet).');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-sm mt-4 text-green-400">{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
