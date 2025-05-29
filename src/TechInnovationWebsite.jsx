import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Users, Shield, ChevronDown, X, Play, Upload, Eye } from 'lucide-react';

const TechInnovationWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [showDemo, setShowDemo] = useState(false);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-4xl w-full border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Product Demo</h3>
              <button onClick={() => setShowDemo(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-black/50 rounded-2xl aspect-video flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-xl">Advanced AI Technology Demo</p>
                <p className="text-gray-400">Showcasing our cutting-edge innovation</p>
              </div>
            </div>
            <button onClick={() => setShowDemo(false)} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-full font-semibold">
              Close Demo
            </button>
          </div>
        </div>
      )}

      {/* AI Generator Modal */}
      {showAIGenerator && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-2xl w-full border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">AI Image Generator</h3>
              <button onClick={() => setShowAIGenerator(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Describe the image you want to generate..." 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 text-center border border-white/10">
                <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">Generated image will appear here</p>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-full font-semibold">
                Generate Image
              </button>
            </div>
          </div>
        </div>
      )}




      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                InnovateTech
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Innovation
              </span>
              <br />
              <span className="text-white">Unleashed</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming digital landscapes through cutting-edge AI image generation and revolutionary web solutions. 
              Your vision, our technology, limitless possibilities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button onClick={() => setShowAIGenerator(true)} className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                Start Creating
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => setShowDemo(true)} className="border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>



            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-300">Images Generated</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300">Websites Built</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets innovative design. We're not just building websites and generating images - we're crafting digital experiences that transform businesses.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* AI Image Generation */}
            <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">AI Image Generation</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Our proprietary AI models generate stunning, high-resolution images from simple text descriptions. Perfect for marketing materials, product mockups, and creative projects.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">10M+</div>
                  <div className="text-sm text-gray-400">Images Created</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">4K</div>
                  <div className="text-sm text-gray-400">Max Resolution</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Try AI Generator
              </button>
            </div>

            {/* Web Development */}
            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Premium Web Development</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Full-stack development using React, Next.js, and cutting-edge technologies. We build scalable, performant applications that drive business growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">50K+</div>
                  <div className="text-sm text-gray-400">Sites Built</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Start Project
              </button>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 mb-20 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Powered by Cutting-Edge Technology</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python'].map((tech) => (
                <div key={tech} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
                  <div className="text-lg font-semibold text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-white">John Davis</div>
                  <div className="text-sm text-gray-400">CEO, TechStart Inc</div>
                </div>
              </div>
              <p className="text-gray-300">"InnovateTech transformed our entire digital presence. Their AI image generation saved us thousands in design costs."</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Miller</div>
                  <div className="text-sm text-gray-400">CTO, Digital Dynamics</div>
                </div>
              </div>
              <p className="text-gray-300">"The quality of their web development is unmatched. Fast, reliable, and exactly what we needed."</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-white">Robert Kim</div>
                  <div className="text-sm text-gray-400">Founder, Creative Labs</div>
                </div>
              </div>
              <p className="text-gray-300">"Working with InnovateTech was a game-changer. Their innovation and expertise are truly exceptional."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditional Rendering for Different Views */}
      {currentView === 'home' && (
        <>
          {/* About Section */}
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
        </>
      )}


      {/* Job Portal Section */}
      <section id="careers" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the future. We're looking for exceptional talent to help us build tomorrow's technology today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Open Positions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Open Positions</h3>
              
              {[
                { title: 'Senior AI Engineer', dept: 'Engineering', type: 'Full-time', location: 'Remote' },
                { title: 'Full Stack Developer', dept: 'Engineering', type: 'Full-time', location: 'Hybrid' },
                { title: 'Product Designer', dept: 'Design', type: 'Full-time', location: 'On-site' },
                { title: 'DevOps Engineer', dept: 'Infrastructure', type: 'Contract', location: 'Remote' }
              ].map((job, index) => (
                <div key={index} className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-400" />
                Secure Application Portal
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name *</label>
                    <input type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" required />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name *</label>
                    <input type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" required />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input type="email" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" required />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" required />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Position Applied For *</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none">
                    <option value="">Select Position</option>
                    <option value="ai-engineer">Senior AI Engineer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="designer">Product Designer</option>
                    <option value="devops">DevOps Engineer</option>
                  </select>
                </div>

                {/* ID.me Verification */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-green-400 mr-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">ID.me Verification Required</h4>
                      <p className="text-sm text-gray-300">Secure identity verification to protect company assets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">Identity Verification: Not Completed</span>
                    </div>
                    <button type="button" className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all">
                      Verify with ID.me
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    ⚠️ All applicants must complete ID.me verification before application submission. This helps us prevent identity fraud and protect company intellectual property.
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Resume/CV *</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all">
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    <div className="text-gray-400 mb-2">Drag & drop your resume or click to browse</div>
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">Choose File</button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Cover Letter</label>
                  <textarea rows="4" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="Tell us why you're perfect for this role..."></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4 text-cyan-500 rounded" required />
                  <label className="text-sm text-gray-300">
                    I agree to the <span className="text-cyan-400 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-cyan-400 hover:underline cursor-pointer">Privacy Policy</span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                  Submit Application
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <div className="flex items-center text-blue-300 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Your data is encrypted and secure. We use industry-standard security practices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechInnovationWebsite;