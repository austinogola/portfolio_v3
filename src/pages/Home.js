import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Works from '../components/Works';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import Connect from '../components/Connect';

const Home = () => {
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
        <Navbar/>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <Intro/>
        <About/>
        <Works/>
        <Skills/>
        <Experience/>
        <Connect/>
      </main>
    </div>
  );
};

export default Home;