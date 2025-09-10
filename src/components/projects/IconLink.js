import Style from './IconLink.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';

function IconLink(props) {

   const { link, title, icon } = props;
   return (
      <a href={link} className={Style.iconlink} target="_blank" rel="noopener noreferrer">
         <Box p={1} border={'2px solid black'} borderRadius={'25px'} padding={'0.5rem 0.9rem'}>
            <i className={classNames(icon, Style.icon)} /> {title}
         </Box>
      </a>
   );
}

export default IconLink;