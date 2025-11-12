import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, User, Mail } from 'lucide-react';

const SectionIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const sections = useMemo(() => [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ], []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          },
          { 
            threshold: 0.5,
            rootMargin: isMobile ? '-50% 0px -50% 0px' : '-20% 0px -20% 0px'
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

   // Desktop Vertical Indicator (unchanged except for tooltip icon)
   if (!isMobile) {
    return (
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-4">
        {/* Connecting line */}
        <div className="absolute w-1 h-full bg-gray-300 dark:bg-gray-600 rounded-full -z-10"></div>
        
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Active indicator line */}
            {activeSection === section.id && (
              <motion.div
                className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1/2 transform -translate-y-1/2"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Section dot */}
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                activeSection === section.id
                  ? 'bg-blue-500 border-blue-500 scale-125'
                  : 'bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-500 group-hover:border-blue-400'
              }`}
            />
            
            {/* Tooltip with icon */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm px-3 py-2 rounded-lg whitespace-nowrap flex items-center space-x-2">
                <section.icon className="w-3 h-3" />
                <span>{section.label}</span>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45"></div>
            </div>
          </motion.button>
        ))}
      </div>
    );
  }

  // Mobile Bottom Indicator with Icons
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <div className="liquid-glass rounded-2xl px-4 py-3 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="flex space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative flex flex-col items-center group"
              whileTap={{ scale: 0.9 }}
            >
              {/* Icon with active state */}
              <div className="relative">
                <section.icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-blue-500 scale-110'
                      : 'text-gray-500 group-hover:text-blue-400'
                  }`}
                />
                {/* Active dot indicator */}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                    layoutId="mobileActiveDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
              
              {/* Label */}
              <span
                className={`text-xs transition-all duration-300 mt-1 ${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                }`}
              >
                {section.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionIndicator;