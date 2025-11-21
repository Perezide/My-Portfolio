// main.tsx or similar
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize theme on load
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme-mode') || 'auto';
  const html = document.documentElement;
  
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    // Auto mode
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour <= 6;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isNight || prefersDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
};

initializeTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)