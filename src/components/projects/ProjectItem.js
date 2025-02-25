import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function ProjectItem({ image, live, npm, source, title, description, alt }) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         {image && <Box component={'img'} src={image} alt={alt || title} />}
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {live && <IconLink link={live} title={'live demo'} icon={'fa fa-safari'} />}
            {npm && <IconLink link={npm} title={'npm package'} icon={'fa fa-cube'} />}
            {source && <IconLink link={source} title={'source code'} icon={'fa fa-code'} />}
         </Box>
      </Box>
   );
}

export default ProjectItem;