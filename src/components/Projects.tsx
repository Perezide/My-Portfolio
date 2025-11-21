import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Book, Shirt, Calendar, Utensils, Users, ShoppingCart, MessageCircle, Cpu, Truck, Building2, Heart, Bike } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories for the filter
  const categories = [
    { id: 'all', label: 'All Projects', icon: Users },
    { id: 'education', label: 'Education', icon: Book },
    { id: 'fashion', label: 'Fashion', icon: Shirt },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'restaurants', label: 'Restaurants', icon: Utensils },
    { id: 'outreach', label: 'Outreach', icon: Heart },
    { id: 'delivery', label: 'Delivery', icon: Bike },
    { id: 'medical', label: 'Medical', icon: Users },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'ai', label: 'AI Powered', icon: Cpu },
    { id: 'productivity', label: 'Productivity', icon: Building2 }
  ];

  // Enhanced projects data with multiple categories and proper URLs
  const projects = [
    {
      title: "Online Library",
      description: "Comprehensive educational platform for digital book management and learning resources",
      categories: ["education"],
      icon: Book,
      tags: ["Education", "React", "firebase"],
      progress: "completed",
      features: ["Digital Book Management", "User Progress Tracking", "Search & Filter", "Reading Lists"],
      githubUrl: "/",
      liveUrl: "https://smhos-rsu-library.web.app/",
      featured: true
    },
    {
      title: "XANOmega",
      description: "Modern fashion brand e-commerce platform with virtual try-on features",
      categories: ["fashion", "ecommerce"],
      icon: Shirt,
      tags: ["Fashion", "E-commerce", "Virtual Try-on", "React"],
      progress: "completed",
      features: ["Virtual Try-on", "Size Recommendation", "AR Integration", "Style Matching"],
      githubUrl: "/",
      liveUrl: "https://xanomega.com",
      featured: true
    },
    {
      title: "EventHandlers",
      description: "Event management and entertainment platform with ticket booking and venue management",
      categories: ["events"],
      icon: Calendar,
      tags: ["Events", "Entertainment", "Booking", "Management"],
      progress: "completed",
      features: ["Event Creation", "Ticket Booking", "Venue Management", "Real-time Updates"],
      githubUrl: "/",
      liveUrl: "https://event-handlers-6275c.web.app/",
      featured: true
    },
    {
      title: "Kings Food Place",
      description: "Restaurant management and food delivery platform with real-time order tracking",
      categories: ["restaurants"],
      icon: Utensils,
      tags: ["Restaurant", "Food Delivery", "Order Tracking", "Reviews"],
      progress: "completed",
      features: ["Online Ordering", "Real-time Tracking", "Menu Management", "Food Table Mangement", "Customer Reviews"],
      githubUrl: "/",
      liveUrl: "https://kingsplace-134c5.web.app/",
      featured: true
    },
    {
      title: "Soul Winning Center",
      description: "Outreach platform for evangelism, follow-up systems, and group evangelism management and tracking",
      categories: ["outreach"],
      icon: Heart,
      tags: ["Outreach", "Evangelism", "Community", "Management"],
      progress: "completed",
      features: ["Member Management", "Follow-up System", "Event Coordination", "Progress Tracking"],
      githubUrl: "/",
      liveUrl: "https://soul-winning-center.web.app/",
      featured: true
    },
    {
      title: "Medical Data Management System",
      description: "Secure healthcare data management platform for medical institutions",
      categories: ["medical"],
      icon: Users,
      tags: ["Healthcare", "Data Security", "Management", "Analytics"],
      progress: "completed",
      features: ["Patient Records", "Data Analytics", "Secure Storage", "Professionals Dashboard and Management"],
      githubUrl: "/",
      liveUrl: "https://medical-data-management-system.web.app/",
      featured: true
    },
    {
      title: "Marketplace",
      description: "Multi-vendor online marketplace with advanced shopping features",
      categories: ["ecommerce"],
      icon: ShoppingCart,
      tags: ["E-commerce", "Multi-vendor", "Inventory", "Multi-platform Marketing"],
      progress: "rebuilding",
      features: ["Multi-vendor Support", "Inventory Management", "Order Processing", "Multi-platform Marketing and Scheduled Posting"],
      githubUrl: "/",
      liveUrl: "/",
      featured: true
    },
    {
      title: "Private Message App",
      description: "Secure private messaging application with end-to-end encryption and AI productivity",
      categories: ["communication", "ai", "productivity"],
      icon: MessageCircle,
      tags: ["Secure Messaging", "Encryption", "Real-time", "AI Productivity"],
      progress: "in progress",
      features: ["End-to-End Encryption", "File Sharing", "Group Chats", "AI tool"],
      githubUrl: "/",
      liveUrl: "/",
      featured: true
    },
    {
      title: "ChromaAI",
      description: "AI-powered terms & conditions, policies, and agreements review platform",
      categories: ["ai", "communication", "productivity"],
      icon: Cpu,
      tags: ["AI", "Terms and Conditions", "Communication", "Productivity"],
      progress: "in progress",
      features: ["AI Summary and Review", "Clauses Flagging", "Changes Tracking", "Legal Assistant"],
      githubUrl: "/",
      liveUrl: "https://chroma-c740d.web.app/",
      featured: true
    },
    {
      title: "PrimeCom App",
      description: "AI-powered community platform for intelligent discussions, collaboration, and task completion",
      categories: ["ai", "communication", "productivity"],
      icon: Cpu,
      tags: ["AI", "Communities", "Collaboration", "Machine Learning", "Task Completion"],
      progress: "coming soon",
      features: ["AI Moderation and Chat Assitant", "Smart Recommendations", "Community Analytics", "Content Filtering", "Chat Summary"],
      githubUrl: "/",
      liveUrl: "/",
      featured: true
    },
    {
      title: "Courries",
      description: "Intelligent app recommendation platform for delivery service",
      categories: ["delivery"],
      icon: Truck,
      tags: ["App Recommendation", "Drivers Registration", "Content Discovery"],
      progress: "completed",
      features: ["OS-Specific Platform Recommendations", "Drivers Profiling", "Analytics Dashboard"],
      githubUrl: "/",
      liveUrl: "https://courries-878c0.web.app/",
      featured: true
    },
    {
      title: "SMHOS Workers",
      description: "Organization management system for worker registration and coordination",
      categories: ["productivity"],
      icon: Building2,
      tags: ["Organization", "Management", "Registration", "Coordination"],
      progress: "completed",
      features: ["Worker Registration and Management", "Scheduling", "Performance Tracking"],
      githubUrl: "/",
      liveUrl: "https://smhos-workers.web.app/",
      featured: true
    },
    {
      title: "RSU Vendors",
      description: "Online store platform for university vendors and campus commerce",
      categories: ["ecommerce", "education"],
      icon: ShoppingCart,
      tags: ["Online Store", "University", "Vendors", "Campus Commerce"],
      progress: "rebuilding",
      features: ["Vendor Management", "Order Processing", "Campus Delivery", "Payment Integration"],
      githubUrl: "/",
      liveUrl: "/",
      featured: true
    }
  ];

 const progressConfig = {
    completed: { label: 'Completed', color: 'bg-green-500', textColor: 'text-green-700 dark:text-green-400' },
    'in progress': { label: 'In Progress', color: 'bg-blue-500', textColor: 'text-blue-700 dark:text-blue-400' },
    rebuilding: { label: 'Rebuilding', color: 'bg-yellow-500', textColor: 'text-yellow-700 dark:text-yellow-400' },
    'coming soon': { label: 'Coming Soon', color: 'bg-purple-500', textColor: 'text-purple-700 dark:text-purple-400' }
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
            Half a decade of building diverse solutions across multiple industries
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-300 hover:bg-blue-500/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const progress = progressConfig[project.progress as keyof typeof progressConfig];
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg ${
                  project.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {/* Header with Icon and Actions */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${progress.textColor} bg-opacity-20`}>
                      {progress.label}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {/* GitHub Link - Larger and with proper URL */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-slate-300" />
                    </motion.a>
                    
                    {/* Live Demo Link - Larger and with proper URL */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700 dark:text-slate-300" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project Title and Description */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-700 dark:text-slate-400 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={`w-1 h-1 rounded-full ${progress.color} mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
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
                
                {/* Categories Badges */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.categories.map((categoryId) => {
                    const category = categories.find(cat => cat.id === categoryId);
                    return category ? (
                      <span
                        key={categoryId}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300"
                      >
                        {category.label}
                      </span>
                    ) : null;
                  })}
                </div>
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-slate-400">
                  <span>Status:</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${progress.color}`}></div>
                    <span className={progress.textColor}>{progress.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-slate-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;