import { useState, useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
   const themeState = { theme, setTheme };

   useEffect(() => {
      localStorage.setItem('theme', theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={themeState}>
         <div>
            <HashRouter>
               <BaseLayout />
            </HashRouter>
         </div>
      </ThemeContext.Provider>
   );
}

export default App;
