import { useState } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

function App() {
   const [theme, setTheme] = useState('light');
   const themeState = { theme, setTheme };

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
