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

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode') as ThemeMode;
      const mode = saved || 'auto';
      
      if (mode === 'dark') return true;
      if (mode === 'light') return false;
      
      // Auto mode calculation
      const hour = new Date().getHours();
      const isNight = hour >= 18 || hour <= 6;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isNight || prefersDark;
    }
    return false;
  });

  // Calculate if we should use dark mode
  const calculateShouldBeDark = useCallback((mode: ThemeMode): boolean => {
    if (mode === 'dark') return true;
    if (mode === 'light') return false;
    
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour <= 6;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isNight || prefersDark;
  }, []);

  // Apply theme to DOM only (no state updates)
  const applyThemeToDOM = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update both DOM and state
  const updateTheme = useCallback((mode: ThemeMode) => {
    const shouldBeDark = calculateShouldBeDark(mode);
    
    // Update DOM
    applyThemeToDOM(shouldBeDark);
    
    // Update state
    setIsDark(shouldBeDark);
  }, [calculateShouldBeDark, applyThemeToDOM]);

  // Handle theme mode changes - only update DOM, state is handled by updateTheme
  useEffect(() => {
    const shouldBeDark = calculateShouldBeDark(themeMode);
    applyThemeToDOM(shouldBeDark);
  }, [themeMode, calculateShouldBeDark, applyThemeToDOM]);

  // Listen for system theme changes in auto mode - only update DOM
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = () => {
      if (themeMode === 'auto') {
        const shouldBeDark = calculateShouldBeDark('auto');
        applyThemeToDOM(shouldBeDark);
        setIsDark(shouldBeDark);
      }
    };

    // Time-based updates for auto mode
    const handleTimeChange = () => {
      if (themeMode === 'auto') {
        const shouldBeDark = calculateShouldBeDark('auto');
        applyThemeToDOM(shouldBeDark);
        setIsDark(shouldBeDark);
      }
    };

    const timeCheckInterval = setInterval(handleTimeChange, 60000);
    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      clearInterval(timeCheckInterval);
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [themeMode, calculateShouldBeDark, applyThemeToDOM]);

  const toggleTheme = useCallback(() => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto'];
    const currentIndex = modes.indexOf(themeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    const newMode = modes[nextIndex];
    
    setThemeMode(newMode);
    localStorage.setItem('theme-mode', newMode);
    updateTheme(newMode);
  }, [themeMode, updateTheme]);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
    updateTheme(mode);
  }, [updateTheme]);

  return { 
    isDark, 
    themeMode,
    toggleTheme, 
    setTheme 
  };
};