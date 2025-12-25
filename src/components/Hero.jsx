import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import RoleTypewriter from './ui/roleTypeWritter';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full opacity-30 transition-opacity duration-300"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, rgba(234, 88, 12, 0.4) 30%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-block mb-6 ">
            <span className="text-red-500 font-medium text-md tracking-wider uppercase">This site is still under developement....</span>
          </div>


          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {personalInfo.name} 👨‍💻
          </h1>


          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8 flex justify-center gap-2">
            <span>I'm a</span>
            <span className="min-w-[18ch] text-left">
              <RoleTypewriter />
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/50 group"
            >
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-700 text-white hover:bg-red-600 hover:border-red-600 hover:text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              Download Resume
              <Download className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
