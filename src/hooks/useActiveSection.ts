import { useState, useEffect, useCallback } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'projects', 'about', 'contact'];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return { activeSection, scrollToSection };
};