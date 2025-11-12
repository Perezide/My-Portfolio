import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wifi, Smartphone, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="liquid-glass rounded-3xl p-8 md:p-12 mx-auto max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Software Developer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building efficient & intelligent systems in{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">AI</span>,{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">IoT</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Telecommunications</span>,{' '}
              and <span className="font-semibold text-orange-600 dark:text-orange-400">Electronic Devices</span>
            </motion.p>

            <motion.div
              className="flex justify-center flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[Code2, Cpu, Wifi, Smartphone, Brain].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="p-3 rounded-2xl glass-effect"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              5 years of experience building platforms and systems that drive efficiency. 
              Passionate about creating impactful startups and global enterprise solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;