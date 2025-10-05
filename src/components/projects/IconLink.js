import Style from './IconLink.module.scss';
import { Box } from '@mui/material';

function IconLink(props) {

   const { link, title, icon } = props;
   return (
      <a href={link} className={Style.iconLink} target="_blank" rel="noopener noreferrer">
         <Box className={Style.iconBox}>
            <i className={icon} /> {title}
         </Box>
      </a>
   );
}

export default IconLink;