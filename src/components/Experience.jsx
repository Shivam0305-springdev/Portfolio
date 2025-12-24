import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline connector line - only show between items */}
              {index < experience.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-800 hidden md:block"></div>
              )}

              {/* Content card */}
              <div className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-neutral-900 relative z-10"></div>
                </div>

                {/* Card content */}
                <div className="flex-1 bg-black border border-gray-800 rounded-xl p-8 hover:border-red-500 transition-all duration-300 group hover:scale-105">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 text-red-500 mb-4">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  {/* Title and company */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Briefcase size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
