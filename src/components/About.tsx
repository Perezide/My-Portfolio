import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started my journey with web development, building my first websites and discovering the power of code to create digital experiences.",
      icon: Code2,
      color: "blue"
    },
    {
      year: "2021-2024",
      title: "Expanding Horizons",
      description: "Dived into software development, working on diverse projects across Education, Fashion, Events, Restaurants, Outreach, Medical, E-commerce, Communication, AI Powered, Productivity and NGO sectors. Built platforms that served real users and solved actual problems.",
      icon: Heart,
      color: "purple"
    },
    {
      year: "2025",
      title: "Mobile Frontier",
      description: "Expanded into mobile development, bringing the same passion for user experience and intelligent solutions. Started building cross-platform applications.",
      icon: Smartphone,
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      icon: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500/20',
      dot: 'bg-blue-500'
    },
    purple: {
      icon: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-500/20',
      dot: 'bg-purple-500'
    },
    green: {
      icon: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-500/20',
      dot: 'bg-green-500'
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
            From writing my first line of code to building intelligent systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const colorClass = colorClasses[milestone.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-8 md:mb-0`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-2xl ${colorClass.bg} mr-4`}>
                          <milestone.icon className={`w-6 h-6 ${colorClass.icon}`} />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full ${colorClass.dot} border-4 border-white dark:border-slate-900`}></div>
                  </div>

                  {/* Year indicator */}
                  <div className="md:hidden text-center mb-4">
                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                      {milestone.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-slate-700 shadow-lg">
            <Rocket className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-4">
              Now & Beyond
            </h3>
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
              "I'm driven by building platforms and systems that are more efficient. Currently aspiring to 
              create intelligent solutions in <strong className="text-gray-800 dark:text-slate-100">AI</strong>, <strong className="text-gray-800 dark:text-slate-100">IoT</strong>, <strong className="text-gray-800 dark:text-slate-100">Telecommunications</strong>, 
              and <strong className="text-gray-800 dark:text-slate-100">Electronic Devices</strong>. My goal is to build impactful startups and global enterprise 
              solutions that push the boundaries of what's possible with technology."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;