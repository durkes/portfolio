import Style from './Terminal.module.scss';
import { Box } from '@mui/material';

function Terminal(props) {
   const { text } = props;

   return (
      <Box component={'section'} className={`${Style.terminal} shadowed`}
         width={'80%'} maxWidth={'60rem'} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box className={Style.header}>
            <i className={`fa fa-circle ${Style.red}`} />
            <i className={`fa fa-circle ${Style.amber}`} />
            <i className={`fa fa-circle ${Style.green}`} />
         </Box>
         <Box className={Style.body}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;