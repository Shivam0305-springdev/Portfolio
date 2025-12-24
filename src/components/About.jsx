import React from 'react';
import { Code2, Sparkles, Award, Users } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: '4+ Years',
      description: 'Professional Experience'
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'Specialized in AI-powered apps'
    },
    {
      icon: Award,
      title: 'Enterprise Grade',
      description: 'Scalable solutions delivered'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative & mentoring'
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Beyond coding, I'm an active contributor to the developer community through my blog posts, 
              where I share insights about Spring Boot best practices, AI integration techniques, and 
              modern software architecture patterns.
            </p>
          </div>

          {/* Right side - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-red-500 transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
