import { useState, useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import { info } from './info/Info';

function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
   const themeState = { theme, setTheme };

   // Set initial theme on document element
   useEffect(() => {
      const initialTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', initialTheme);
   }, []);

   useEffect(() => {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

   useEffect(() => {
      // preload project images
      info.portfolio.forEach(project => {
         if (project.image) {
            const img = new Image();
            img.src = project.image;
         }
      });
   }, []);

   return (
      <ThemeContext.Provider value={themeState}>
         <HashRouter>
            <BaseLayout />
         </HashRouter>
      </ThemeContext.Provider>
   );
}

export default App;
