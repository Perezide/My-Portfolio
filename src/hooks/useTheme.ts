import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize state based on current conditions
    if (typeof window !== 'undefined') {
      const hour = new Date().getHours();
      const isNight = hour >= 18 || hour <= 6;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isNight || prefersDark;
    }
    return false;
  });

  // Apply theme to document
  const applyTheme = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(isDark);
  }, [applyTheme, isDark]);

  // Listen for system theme changes and time changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = () => {
      const hour = new Date().getHours();
      const isNight = hour >= 18 || hour <= 6;
      
      // Only update if we're following system preference
      if (!mediaQuery.matches && isNight) {
        setIsDark(true);
      } else if (mediaQuery.matches && !isNight) {
        setIsDark(false);
      }
    };

    const handleTimeChange = () => {
      const hour = new Date().getHours();
      const isNight = hour >= 18 || hour <= 6;
      setIsDark(isNight);
    };

    // Check for time-based changes every minute
    const timeCheckInterval = setInterval(handleTimeChange, 60000);

    // Listen for system preference changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      clearInterval(timeCheckInterval);
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      applyTheme(newValue);
      return newValue;
    });
  }, [applyTheme]);

  return { isDark, toggleTheme };
};