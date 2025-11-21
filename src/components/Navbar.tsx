import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToogle';
import { useActiveSection } from '../hooks/useActiveSection';

const Name = "<Perezide Konboye>"

const Navbar: React.FC = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-slate-800 dark:from-slate-300 dark:via-blue-400 dark:to-slate-200 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            {Name}
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 transition-colors capitalize"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}>
                  {item.label}
                </span>
                
                {/* Active indicator underline */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                    layoutId="navbarActiveIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;