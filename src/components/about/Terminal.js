import React from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';

function Terminal(props) {
   const { text } = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
         width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box className={Style.header}>
            <i className={classNames('fa fa-circle', Style.red)} />
            <i className={classNames('fa fa-circle', Style.amber)} />
            <i className={classNames('fa fa-circle', Style.green)} />
         </Box>
         <Box className={Style.body}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;