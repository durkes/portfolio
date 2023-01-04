import { useContext } from 'react';
import Style from './IconLink.module.scss';
import { Box } from '@mui/material';
import ThemeContext from '../../context/ThemeContext';

function IconLink(props) {
   const { theme } = useContext(ThemeContext);

   const { link, title, icon } = props;
   return (
      <a href={link} className={theme === 'dark' ? Style.iconlink_dark : Style.iconlink} target="_blank" rel="noopener noreferrer">
         <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <i className={icon} /> {title}
         </Box>
      </a>
   );
}

export default IconLink;