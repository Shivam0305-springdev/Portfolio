import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="text-red-500 fill-red-500" size={16} />
            <span>using React & Spring Boot</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
