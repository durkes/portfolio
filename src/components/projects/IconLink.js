import React from 'react';
import Style from './Project.module.scss';
import { Box } from '@mui/material';

function IconLink(props) {
   const { link, title, icon } = props;
   return (
      <a href={link} className={Style.iconlink} target="_blank" rel="noopener noreferrer">
         <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <i className={icon} /> {title}
         </Box>
      </a>
   );
}

export default IconLink;