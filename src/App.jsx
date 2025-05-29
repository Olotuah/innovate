import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Hero from './components/Hero';
import AdminLogin from './pages/AdminLogin';
import jobDescriptions from "./data/jobDescriptions";
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JobDetails from "./pages/JobDetails";
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import SignUpModal from './components/SignUpModal';
import DemoModal from './components/DemoModal';
import AIGeneratorModal from './components/AIGeneratorModal';
import ApplyPage from './pages/ApplyPage';
import AdminDashboard from './pages/AdminDashboard';

const Home = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showAIGen, setShowAIGen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar onSignupClick={() => setShowSignup(true)} onScrollTo={scrollTo} />
      
      {showSignup && <SignUpModal onClose={() => setShowSignup(false)} />}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {showAIGen && <AIGeneratorModal onClose={() => setShowAIGen(false)} />}

      <main>
      <Hero
  onStartCreating={() => setShowSignup(true)}
  onWatchDemo={() => setShowDemo(true)}
/>
        <AboutSection />
        <Services
          onStartCreating={() => setShowSignup(true)}
          onWatchDemo={() => setShowDemo(true)}
          onTryAIGen={() => setShowAIGen(true)}
          onStartProject={() => setShowSignup(true)}
          additionalTech={["Data Entry", "Customer Service"]}
        />
        <Testimonials />
        <Careers />
      </main>
      <ContactSection />
      <Footer />

    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/apply" element={<ApplyPage />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/jobs/:title" element={<JobDetails />} />
    </Routes>
  </Router>
);

export default App;
