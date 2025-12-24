import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

// const BACKEND_URL = "process.env.REACT_APP_BACKEND_URL";
// const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await axios.post(`${API}/contact`, formData);
      
  //     if (response.data.success) {
  //       toast({
  //         title: "Message sent!",
  //         description: response.data.message || "Thank you for reaching out. I'll get back to you soon.",
  //       });
  //       setFormData({ name: '', email: '', subject: '', message: '' });
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     toast({
  //       title: "Error",
  //       description: error.response?.data?.detail || "Failed to send message. Please try again.",
  //       variant: "destructive"
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-xl p-6 hover:border-red-500 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-xl p-6 hover:border-red-500 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">{personalInfo.location}</p>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Let's Build Together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form 
              // onSubmit={handleSubmit}
               className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group shadow-lg shadow-red-900/50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
