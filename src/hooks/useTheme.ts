// hooks/useTheme.ts
import { useState, useEffect, useCallback } from 'react';

type ThemeMode = 'light' | 'dark' | 'auto';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode') as ThemeMode;
      return saved || 'auto';
    }
    return 'auto';
  });

  const [isDark, setIsDark] = useState(false);

  const calculateAutoTheme = useCallback(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour <= 6;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isNight || prefersDark;
  }, []);

  // Apply theme to document
  const applyTheme = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.7)');
      document.documentElement.style.setProperty('--glass-border', 'rgba(148, 163, 184, 0.1)');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.7)');
      document.documentElement.style.setProperty('--glass-border', 'rgba(148, 163, 184, 0.1)');
    }
    setIsDark(dark);
  }, []);

  // Update theme based on mode
  const updateTheme = useCallback(() => {
    let dark = false;
    
    switch (themeMode) {
      case 'dark':
        dark = true;
        break;
      case 'light':
        dark = false;
        break;
      case 'auto':
        dark = calculateAutoTheme();
        break;
    }
    
    applyTheme(dark);
  }, [themeMode, calculateAutoTheme, applyTheme]);

  // Initialize theme on mount
  useEffect(() => {
    updateTheme();
  }, [updateTheme]);

  // Listen for system theme changes and time changes in auto mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = () => {
      if (themeMode === 'auto') {
        updateTheme();
      }
    };

    const handleTimeChange = () => {
      if (themeMode === 'auto') {
        updateTheme();
      }
    };

    const timeCheckInterval = setInterval(handleTimeChange, 60000);
    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      clearInterval(timeCheckInterval);
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [themeMode, updateTheme]);

  const toggleTheme = useCallback(() => {
    setThemeMode(current => {
      const modes: ThemeMode[] = ['light', 'dark', 'auto'];
      const currentIndex = modes.indexOf(current);
      const nextIndex = (currentIndex + 1) % modes.length;
      return modes[nextIndex];
    });
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
  }, []);

  return { 
    isDark, 
    themeMode,
    toggleTheme, 
    setTheme 
  };
};