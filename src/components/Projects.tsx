import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Book, Shirt, Calendar, Utensils, Users, ShoppingCart, MessageCircle, Cpu, Truck, Building2, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Categories for the endless slider
  const categories = [
    { id: 'all', label: 'All Projects', icon: Users },
    { id: 'education', label: 'Education', icon: Book },
    { id: 'fashion', label: 'Fashion', icon: Shirt },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'restaurants', label: 'Restaurants', icon: Utensils },
    { id: 'outreach', label: 'Outreach', icon: Heart },
    { id: 'medical', label: 'Medical', icon: Users },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'ai', label: 'AI Powered', icon: Cpu },
    { id: 'productivity', label: 'Productivity', icon: Building2 }
  ];

  // Enhanced projects data with progress and features
  const projects = [
    {
      title: "Online Library",
      description: "Comprehensive educational platform for digital book management and learning resources",
      category: "education",
      icon: Book,
      tags: ["Education", "React", "firebase"],
      progress: "completed",
      features: ["Digital Book Management", "User Progress Tracking", "Search & Filter", "Reading Lists"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "XANOmega",
      description: "Modern fashion brand e-commerce platform with virtual try-on features",
      category: "fashion",
      icon: Shirt,
      tags: ["Fashion", "E-commerce", "Virtual Try-on", "React"],
      progress: "completed",
      features: ["Virtual Try-on", "Size Recommendation", "AR Integration", "Style Matching"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "EventHandlers",
      description: "Event management and entertainment platform with ticket booking and venue management",
      category: "events",
      icon: Calendar,
      tags: ["Events", "Entertainment", "Booking", "Management"],
      progress: "completed",
      features: ["Event Creation", "Ticket Booking", "Venue Management", "Real-time Updates"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Kings Food Place",
      description: "Restaurant management and food delivery platform with real-time order tracking",
      category: "restaurants",
      icon: Utensils,
      tags: ["Restaurant", "Food Delivery", "Order Tracking", "Reviews"],
      progress: "completed",
      features: ["Online Ordering", "Real-time Tracking", "Menu Management", "Food Table Mangement", "Customer Reviews"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Soul Winning Center",
      description: "Outreach platform for evangelism, follow-up systems, and group evangelism management and tracking",
      category: "outreach",
      icon: Heart,
      tags: ["Outreach", "Evangelism", "Community", "Management"],
      progress: "completed",
      features: ["Member Management", "Follow-up System", "Event Coordination", "Progress Tracking"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Medical Data Management System",
      description: "Secure healthcare data management platform for medical institutions",
      category: "medical",
      icon: Users,
      tags: ["Healthcare", "Data Security", "Management", "Analytics"],
      progress: "completed",
      features: ["Patient Records", "Data Analytics", "Secure Storage", "Professionals Dashboard and Management"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Marketplace",
      description: "Multi-vendor online marketplace with advanced shopping features",
      category: "ecommerce",
      icon: ShoppingCart,
      tags: ["E-commerce", "Multi-vendor", "Inventory", "Multi-platform Marketing"],
      progress: "rebuilding",
      features: ["Multi-vendor Support", "Inventory Management", "Order Processing", "Multi-platform Marketing and Scheduled Posting"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Private Message App",
      description: "Secure private messaging application with end-to-end encryption and AI productivity",
      category: "communication",
      icon: MessageCircle,
      tags: ["Secure Messaging", "Encryption", "Real-time", "AI Productivity"],
      progress: "in progress",
      features: ["End-to-End Encryption", "File Sharing", "Group Chats", "AI tool"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "ChromaAI",
      description: "AI-powered terms & conditions, policies, and agreements review platform",
      category: "ai",
      icon: Cpu,
      tags: ["AI", "Terms and Conditions"],
      progress: "in progress",
      features: ["AI Summary and Review", "Clauses Flagging", "Changes Tracking", "Legal Assistant"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "PrimeCom App",
      description: "AI-powered community platform for intelligent discussions, collaboration, and task completion",
      category: "ai",
      icon: Cpu,
      tags: ["AI", "Communities", "Collaboration", "Machine Learning", "Task Completion"],
      progress: "coming soon",
      features: ["AI Moderation and Chat Assitant", "Smart Recommendations", "Community Analytics", "Content Filtering", "Chat Summary"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Courries",
      description: "Intelligent app recommendation platform for delivery service",
      category: "productivity",
      icon: Truck,
      tags: ["App Recommendation", "Drivers Registration", "Content Discovery"],
      progress: "completed",
      features: ["OS-Specific Platform Recommendations", "Drivers Profiling", "Analytics Dashboard"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "SMHOS Workers",
      description: "Organization management system for worker registration and coordination",
      category: "productivity",
      icon: Building2,
      tags: ["Organization", "Management", "Registration", "Coordination"],
      progress: "completed",
      features: ["Worker Registration and Management", "Scheduling", "Performance Tracking"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "RSU Vendors",
      description: "Online store platform for university vendors and campus commerce",
      category: "ecommerce",
      icon: ShoppingCart,
      tags: ["Online Store", "University", "Vendors", "Campus Commerce"],
      progress: "completed",
      features: ["Vendor Management", "Order Processing", "Campus Delivery", "Payment Integration"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    }
  ];

  // Progress status colors and labels
  const progressConfig = {
    completed: { label: 'Completed', color: 'bg-green-500', textColor: 'text-green-700 dark:text-green-400' },
    'in progress': { label: 'In Progress', color: 'bg-blue-500', textColor: 'text-blue-700 dark:text-blue-400' },
    rebuilding: { label: 'Rebuilding', color: 'bg-yellow-500', textColor: 'text-yellow-700 dark:text-yellow-400' },
    'coming soon': { label: 'Coming Soon', color: 'bg-purple-500', textColor: 'text-purple-700 dark:text-purple-400' }
  };

// Simple infinite scroll
useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  let animationFrame: number;
  let position = 0;
  const speed = 0.5;

  const animate = () => {
    position -= speed;
    
    if (position <= -slider.scrollWidth / 2) {
      position = 0;
    }
    
    slider.style.transform = `translateX(${position}px)`;
    animationFrame = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, []);

const filteredProjects = activeCategory === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeCategory);

const duplicatedCategories = [...categories, ...categories];

return (
  <section id="projects" className="py-20 bg-white dark:bg-gray-900"> {/* Make sure ID is 'projects' */}
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
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          5 years of building diverse solutions across multiple industries
        </p>
      </motion.div>

      {/* Categories Slider */}
      <div className="mb-12 overflow-hidden">
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex space-x-4 py-4"
            style={{ willChange: 'transform' }}
          >
            {duplicatedCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={`${category.id}-${index}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'glass-effect text-gray-700 dark:text-gray-300 hover:bg-blue-500/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
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
                className={`liquid-glass rounded-2xl p-6 border border-white/20 ${
                  project.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {/* Header with Icon and Actions */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl glass-effect">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${progress.textColor} bg-opacity-20`}>
                      {progress.label}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg glass-effect hover:scale-110 transition-transform">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Project Title and Description */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
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
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
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

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;