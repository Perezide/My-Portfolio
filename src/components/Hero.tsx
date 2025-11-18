import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Smartphone, Brain, Globe, Zap, Save, Edit } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [customTitle, setCustomTitle] = useState("</Software Developer>");
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Typewriter effect on initial load and when customTitle changes
  useEffect(() => {
    setDisplayedTitle("");
    setShowCursor(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= customTitle.length) {
        setDisplayedTitle(customTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [customTitle]); // Re-run when customTitle changes

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      setShowCursor(false); // Hide cursor when editing
      inputRef.current.focus();
      inputRef.current.select();
    } else {
      setShowCursor(true); // Show cursor when not editing
    }
  }, [isEditing]);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (customTitle.trim() === '') {
      setCustomTitle('</Software Developer>');
    }
    setIsEditing(false);
    // The typewriter effect will automatically re-run because customTitle changed
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setCustomTitle('</Software Developer>');
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTitle(e.target.value);
  };

  // Show the custom title immediately when editing, show typewriter effect when not editing
  const titleToDisplay = isEditing ? customTitle : displayedTitle;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Light Mode Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base White Gradient */}
        <div className="absolute inset-0 light-background"></div>
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-white/10 backdrop-blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Floating Glass Elements */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-40 h-40 bg-blue-200/30 rounded-full backdrop-blur-xl border border-white/30"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-slate-200/20 rounded-full backdrop-blur-xl border border-white/20"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Subtle Code Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl opacity-5 text-blue-400 font-mono"
          animate={{ y: [0, -15, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          {"<Code/>"}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl"
          >
            {/* Professional Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg md:text-xl text-gray-800 dark:text-slate-300 font-medium">
                Hello, I'm a
              </span>
            </motion.div>

            {/* Editable Main Title */}
            <motion.div 
              className="relative mb-8 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {isEditing ? (
                <div className="flex flex-col items-center space-y-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={customTitle}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="text-2xl md:text-4xl lg:text-5xl font-bold bg-transparent border-b-2 border-blue-500 text-center outline-none bg-gradient-to-r from-gray-800 via-blue-600 to-gray-900 dark:from-slate-300 dark:via-blue-400 dark:to-slate-200 bg-clip-text text-transparent w-full max-w-md"
                    placeholder="Enter your title..."
                  />
                  <motion.button
                    onClick={handleSave}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </motion.button>
                </div>
              ) : (
                <div 
                  className="cursor-pointer inline-block relative"
                  onClick={handleTitleClick}
                >
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-gray-900 dark:from-slate-300 dark:via-blue-400 dark:to-slate-200 bg-clip-text text-transparent min-h-[1.2em] flex justify-center items-center">
                    {titleToDisplay}
                    {/* Blinking cursor when not editing and showCursor is true */}
                    {showCursor && !isEditing && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-0.5 h-[1em] bg-blue-500 ml-1 align-middle"
                      />
                    )}
                  </h1>
                  
                  {/* Edit icon that appears on hover */}
                  <motion.div
                    className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Edit className="w-5 h-5 text-gray-500 dark:text-slate-400" />
                  </motion.div>
                </div>
              )}
              
              {/* Instructions tooltip */}
              {!isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="text-xs text-gray-500 dark:text-slate-400 mt-2"
                >
                  Click to edit
                </motion.div>
              )}
            </motion.div>
            
            {/* Experience Summary */}
            <motion.p 
              className="text-xl text-gray-700 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              With over <span className="font-semibold text-blue-600 dark:text-blue-400">Half a decade</span> of experience building 
              digital products that solve real problems
            </motion.p>

            {/* Core Competencies */}
            <motion.div
              className="flex justify-center flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: Globe, label: 'Web Development', color: 'text-blue-500' },
                { icon: Smartphone, label: 'Mobile Apps', color: 'text-green-500' },
                { icon: Brain, label: 'AI Systems', color: 'text-purple-500' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-800 dark:text-slate-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Specialization */}
            <motion.p
              className="text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">efficient systems</span>, 
              {' '}<span className="font-semibold text-purple-600 dark:text-purple-400">AI solutions</span>, and 
              {' '}<span className="font-semibold text-green-600 dark:text-green-400">scalable platforms</span>
            </motion.p>

            {/* Tech Stack Indicators */}
            <motion.div
              className="flex justify-center flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[Code2, Cpu, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="p-3 rounded-xl bg-white/20 dark:bg-gray-800/10 border border-white/20"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-slate-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.p
              className="text-base text-gray-500 dark:text-slate-500 max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Ready to bring your ideas to life
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;