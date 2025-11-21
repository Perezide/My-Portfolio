import React, { useState } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { isDark, themeMode, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    { mode: 'light' as const, icon: Sun, label: 'Light' },
    { mode: 'dark' as const, icon: Moon, label: 'Dark' },
    { mode: 'auto' as const, icon: Monitor, label: 'Auto' },
  ];

  const currentTheme = themeOptions.find(opt => opt.mode === themeMode);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        aria-label="Theme settings"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentTheme && (
          <currentTheme.icon className={`w-4 h-4 ${
            themeMode === 'light' ? 'text-amber-500' : 
            themeMode === 'dark' ? 'text-blue-300' : 'text-gray-500'
          }`} />
        )}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''} ${
          isDark ? 'text-slate-300' : 'text-gray-600'
        }`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full right-0 mt-2 w-40 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-xl z-50"
          >
            <div className="p-2 space-y-1">
              {themeOptions.map((option) => (
                <motion.button
                  key={option.mode}
                  onClick={() => {
                    setTheme(option.mode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    themeMode === option.mode
                      ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <option.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;