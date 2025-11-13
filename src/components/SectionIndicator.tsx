import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, User, Mail } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const SectionIndicator: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { activeSection, scrollToSection } = useActiveSection();

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Vertical Indicator
  if (!isMobile) {
    return (
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-6">
        {/* Connecting line */}
        <div className="absolute w-0.5 h-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full -z-10"></div>
        
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
                className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1/2 transform -translate-y-1/2 shadow-lg"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            
            {/* Section dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-200 group-hover:scale-125 ${
                activeSection === section.id
                  ? 'bg-blue-500 border-blue-500 scale-125 shadow-lg'
                  : 'bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-500 group-hover:border-blue-400'
              }`}
            />
            
            {/* Tooltip with icon */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm px-3 py-2 rounded-lg whitespace-nowrap flex items-center space-x-2 shadow-lg">
                <section.icon className="w-3 h-3" />
                <span className="font-medium">{section.label}</span>
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
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <div className="liquid-glass rounded-2xl px-6 py-3 backdrop-blur-lg border border-white/20 shadow-xl">
        <div className="flex space-x-10">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative flex flex-col items-center group"
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon with active state */}
              <div className="relative">
                <section.icon
                  className={`w-6 h-6 transition-all duration-200 ${
                    activeSection === section.id
                      ? 'text-blue-500 scale-110'
                      : 'text-gray-500 group-hover:text-blue-400'
                  }`}
                />
                {/* Active dot indicator */}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-lg"
                    layoutId="mobileActiveDot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              
              {/* Label */}
              <span
                className={`text-xs transition-all duration-200 mt-1 ${
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