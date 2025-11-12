import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Chrome, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Legal Assistant",
      description: "Chrome extension for analyzing terms & conditions and policies with AI",
      category: "AI/Chrome Extension",
      icon: Chrome,
      tags: ["AI", "Chrome Extension", "Legal Tech"],
      featured: true
    },
    {
      title: "Medical Platform",
      description: "Comprehensive healthcare management system for medical professionals",
      category: "Medical",
      icon: Smartphone,
      tags: ["Healthcare", "SaaS", "React"],
      featured: true
    },
    {
      title: "Private Messaging App",
      description: "Secure and private messaging application (In Progress)",
      category: "Communication",
      icon: Smartphone,
      tags: ["React Native", "Security", "Real-time"],
      featured: false
    },
    {
      title: "Food Delivery & Recommendation",
      description: "Intelligent food delivery platform with AI recommendations",
      category: "Food Tech",
      icon: Smartphone,
      tags: ["AI", "E-commerce", "Recommendation"],
      featured: false
    },
    {
      title: "Online Marketplace",
      description: "Multi-vendor e-commerce platform with advanced features",
      category: "E-commerce",
      icon: Smartphone,
      tags: ["E-commerce", "Payment", "Multi-vendor"],
      featured: false
    },
    {
      title: "NGO Management Suite",
      description: "Platform for Evangelism, Follow up and Fundraising",
      category: "NGO",
      icon: Smartphone,
      tags: ["NGO", "Fundraising", "Management"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            5 years of building diverse solutions across multiple industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`liquid-glass rounded-2xl p-6 border border-white/20 ${
                project.featured ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <project.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;