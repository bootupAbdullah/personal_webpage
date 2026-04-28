import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'go');
    if (theme === 'dark') root.classList.add('dark');
    if (theme === 'go') root.classList.add('go');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  };

  const activateGoTheme = () => {
    setTheme(t => (t === 'go' ? 'light' : 'go'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode, activateGoTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
