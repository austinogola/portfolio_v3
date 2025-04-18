import React, { useState,useEffect } from 'react';
import sunImage from './icons8-sun-100.png'

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeLink, setActiveLink] = useState(null);

      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        console.log(element)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setIsMenuOpen(false);
          setActiveLink(sectionId)
  
        }

        
      };

      const sectionIds=['intro','about','works','skills','experience','connect']

      useEffect(()=>{
        const sectionRefs =document.querySelectorAll('section[id]')

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                // console.log(entry.target.id, entry.isIntersecting,sectionIds.includes(entry.target.id))
              if (entry.isIntersecting && sectionIds.includes(entry.target.id)) {
                setActiveLink(entry.target.id)
              }
            });
          };
    
        const observer = new IntersectionObserver(handleIntersect, {
            root: null, // viewport
            threshold: 0.6, // 50% of the div must be visible
          });

          sectionRefs.forEach((section) => {
            if (section) observer.observe(section);
          });
      
          return () => {
            sectionRefs.forEach((section) => {
              if (section) observer.unobserve(section);
            });
          };

      },[])
    return(
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                {/* <span role="img" aria-label="wave">👋</span> */}
                <span>
                  <img src={sunImage}/>
                </span>
              </div>
              <span className="text-lg font-bold">Austin Ogola</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 ">
                <button onClick={() => scrollToSection('about')} 
                className={` transition ease-in-out text-gray-600 hover:text-black hover:bg-gray-200 ${activeLink==='about'?'bg-gray-400 text-white':''} py-2 px-6 rounded-full`}>About</button>
                
                <button onClick={() => scrollToSection('works')} 
                className={` transition ease-in-out text-gray-600 hover:text-black hover:bg-gray-200 ${activeLink==='works'?'bg-gray-400 text-white':''} py-2 px-6 rounded-full`}>Works</button>
                
                <button onClick={() => scrollToSection('skills')} 
                className={` transition ease-in-out text-gray-600 hover:text-black hover:bg-gray-200 ${activeLink==='skills'?'bg-gray-400 text-white':''} py-2 px-6 rounded-full`}>Skills</button>
                
                <button onClick={() => scrollToSection('experience')} 
                className={` transition ease-in-out text-gray-600 hover:text-black hover:bg-gray-200 ${activeLink==='experience'?'bg-gray-400 text-white':''} py-2 px-6 rounded-full`}>Experience</button>
                
                {/* <button onClick={() => scrollToSection('connect')} 
                className={` transition ease-in-out text-gray-600 hover:text-black hover:bg-gray-200 ${activeLink==='connect'?'bg-gray-400 text-white':''} py-2 px-6 rounded-full`}>Connect</button> */}
              {/* <a href="#story" className="text-gray-600 hover:text-black">About</a>
              <a href="#works" className="text-gray-600 hover:text-black">Works</a>
              <a href="#skills" className="text-gray-600 hover:text-black">Skills</a>
              <a href="#explorations" className="text-gray-600 hover:text-black">Experience</a>
              <a href="#connect" className="text-gray-600 hover:text-black">Connect</a> */}
            </div>
            
            {/* CTA Button */}
            <button onClick={() => scrollToSection('connect')} 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Connect
            </button>

            {/* <button onClick={() => scrollToSection('connect')} 
            className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Connect
            </button> */}
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden bg-gray-50`}
        >
          <div className="px-4 py-2 space-y-1">
            <a href="#story" className="block py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">
              Story
            </a>
            <a href="#works" className="block py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">
              Works
            </a>
            <a href="#skills" className="block py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">
              Skills
            </a>
            <a href="#explorations" className="block py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">
              Explorations
            </a>
            <a href="#connect" className="block py-3 px-4 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg">
              Connect
            </a>
            {/* <button className="w-full mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Say "Hello!"
            </button> */}
          </div>
        </div>
      </nav>
    )
}


export default Navbar;