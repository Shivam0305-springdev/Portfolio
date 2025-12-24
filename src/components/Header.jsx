import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.social.github
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.social.linkedin
    },
    {
      name: 'Medium',
      icon: BookOpen,
      url: personalInfo.social.medium
    }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-2xl font-bold text-white hover:text-red-500 transition-colors duration-300"
          >
            SR<span className="text-red-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/98 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-gray-800' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Social Links */}
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
