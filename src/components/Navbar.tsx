import React from 'react';
import ThemeToggle from './ThemeToogle';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Perezide Konboye
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;