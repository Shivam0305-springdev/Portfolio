import React from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and intelligent applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-gray-800 rounded-xl p-8 hover:border-red-500 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
