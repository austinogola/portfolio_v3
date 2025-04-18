import React, { useState } from 'react';

const PortfolioPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <span role="img" aria-label="wave">👋</span>
              </div>
              <span className="text-lg">Daniel Sun</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('story')} className="text-gray-600 hover:text-black">Story</button>
              <button onClick={() => scrollToSection('works')} className="text-gray-600 hover:text-black">Works</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-black">Skills</button>
              <button onClick={() => scrollToSection('explorations')} className="text-gray-600 hover:text-black">Explorations</button>
              <button onClick={() => scrollToSection('connect')} className="text-gray-600 hover:text-black">Connect</button>
            </div>
            
            <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Say "Hello!"
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-gray-50`}>
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => scrollToSection('story')} className="block w-full text-left py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">Story</button>
            <button onClick={() => scrollToSection('works')} className="block w-full text-left py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">Works</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">Skills</button>
            <button onClick={() => scrollToSection('explorations')} className="block w-full text-left py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">Explorations</button>
            <button onClick={() => scrollToSection('connect')} className="block w-full text-left py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">Connect</button>
            <button className="w-full mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Say "Hello!"</button>
          </div>
        </div>
      </nav>

      {/* Story Section */}
      <section id="story" className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Born in Kharkiv, Ukraine. Thriving in Porto, Portugal.</h2>
            <p className="text-gray-600">I've spent the past 4+ years collaborating with VC-backed products on branding, websites, apps, and marketing.</p>
            <p className="text-gray-600">I join forces with founders to create compelling stories and digital experiences. Ones that make their products shine, resonate with users, and attract more investors.</p>
          </div>
          <div className="relative">
            <img src="/api/placeholder/400/320" alt="Photos of Daniel" className="rounded-lg shadow-lg" />
            <p className="text-sm text-gray-500 mt-2 italic">When life led me holding the selfie in my hand</p>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-gray-600 mb-8">So far I helped 10+ products funded by the best:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Y Combinator', 'Accel', 'Plug and Play', 'Seedtech'].map((company) => (
              <div key={company} className="text-gray-800 font-medium">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Selected works from<br />2020 to the present</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Memex</h3>
              <p className="text-gray-600 mb-4">🇩🇪 Germany, angel investors</p>
              <p className="text-gray-600 mb-4">Organise, take notes and discuss the web without context switches & copy pasting. By yourself, with your peers & enhanced by AI.</p>
              <button className="text-black hover:underline">Open case →</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Quantia</h3>
              <p className="text-gray-600 mb-4">🇺🇾 Uruguay, self-funded</p>
              <button className="text-black hover:underline">Open case →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-500 italic mb-4">when I'm not out with my wife & dog...</p>
          <h2 className="text-4xl font-bold mb-12">You'll catch me doing<br />a combo of these things:</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-green-100 inline-block px-3 py-1 rounded-full text-sm mb-4">things i create</div>
              <ul className="space-y-2">
                {['websites', 'app design', 'visual identity', 'illustrations', 'design systems', 'ui animation'].map((skill) => (
                  <li key={skill} className="text-gray-800">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-100 inline-block px-3 py-1 rounded-full text-sm mb-4">for products in</div>
              <ul className="space-y-2">
                {['SaaS', 'fintech', 'Web3.0', 'ai', 'medtech'].map((industry) => (
                  <li key={industry} className="text-gray-800">{industry}</li>
                ))}
              </ul>
              <p className="text-gray-400">and more</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-sm mb-4">using tools like</div>
              <ul className="space-y-2">
                {['figma', 'after effects', 'framer', 'illustrator', 'photoshop', 'spline'].map((tool) => (
                  <li key={tool} className="text-gray-800">{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;