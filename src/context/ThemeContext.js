import { createContext } from 'react';

// bind useState in App.js
const ThemeContext = createContext({
    theme: null,
    setTheme: () => { },
});

export default ThemeContext;