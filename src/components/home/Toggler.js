import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleToggleTheme }) {
   const transition = 'all 250ms ease';

   return (
      <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', userSelect: 'none', ':hover': { transform: 'translateY(-3px)', transition: transition } }}>
         {
            darkMode ?
               <span onClick={handleToggleTheme} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={handleToggleTheme} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   );
}