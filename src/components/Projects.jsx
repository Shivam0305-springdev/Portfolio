import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in Spring Boot development and AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300 group hover:scale-105"
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-red-500 transition-colors duration-300"
                    >
                      <Github size={20} className="text-black" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-red-500 transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="text-black" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black border border-gray-700 rounded-md text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
