import { useEffect, useState } from "react";
import moonIcon from '../assets/images/icon-moon.svg' 
import sunIcon from '../assets/images/icon-sun.svg' 


const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Update `isDarkMode` based on localStorage or default to system setting
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);
    
    useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);





  return (
      <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          <img className='cursor-pointer' src={isDarkMode ? sunIcon : moonIcon} alt="moon icon" />
    </button>
  )
}

export default ThemeToggle