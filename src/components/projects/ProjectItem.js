import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function ProjectItem(props) {
   const { image, live, source, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
         </Box>
      </Box>
   );
}

export default ProjectItem;