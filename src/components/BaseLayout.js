import { useContext } from 'react';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ThemeContext from '../context/ThemeContext';
import ScrollToTop from './common/ScrollToTop';

export default function BaseLayout() {
   const { theme, setTheme } = useContext(ThemeContext);

   function handleToggleTheme() {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   }

   return (
      <Box>
         <ScrollToTop />
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
                  <p>original design by <a href="https://paytonpierce.dev/" target="_blank" rel="noreferrer">Payton Pierce</a></p>
                  <p><a href="https://github.com/durkes/portfolio" target="_blank" rel="noreferrer">built w/ React</a> &copy; 2025</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
