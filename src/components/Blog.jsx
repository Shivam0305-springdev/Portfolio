import React from 'react';
import { BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react';
import { blogPosts, personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-red-500">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights on Spring Boot, AI integration, and modern software development
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Medium */}
        <div className="text-center">
          <div className="bg-black border border-gray-800 rounded-xl p-12 max-w-3xl mx-auto">
            <BookOpen className="text-red-500 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-white mb-4">
              Read More on Medium
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Explore my complete collection of articles covering Spring Boot development, 
              AI integration, microservices architecture, and software engineering best practices.
            </p>
            <Button
              onClick={() => window.open(personalInfo.social.medium, '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/50 group"
            >
              Visit My Medium Blog
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
