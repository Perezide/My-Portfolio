import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
          >
            <span>© {currentYear} All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code2 className="w-4 h-4 text-blue-500" />
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Powered by Vite</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;