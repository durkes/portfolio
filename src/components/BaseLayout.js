import { useContext } from 'react';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Style from './BaseLayout.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ThemeContext from '../context/ThemeContext';

export default function BaseLayout() {
   const { theme, setTheme } = useContext(ThemeContext);

   function handleToggleTheme() {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   }

   return (
      <Box className={theme === 'dark' ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={theme === 'dark'} handleToggleTheme={handleToggleTheme} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/projects'} element={<Projects />} />
                  <Route path={'*'} element={<Home />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p><a href="https://github.com/paytonjewell/ReactPortfolioTemplate" target="_blank" rel="noreferrer">original template</a> by <a href="https://paytonpierce.dev/" target="_blank" rel="noreferrer">Payton Pierce</a></p>
                  <p><a href="https://github.com/durkes/portfolio" target="_blank" rel="noreferrer">built w/ React</a> &copy; 2025</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
