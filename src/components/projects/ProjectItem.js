import IconLink from './IconLink';
import Style from './ProjectItem.module.scss';
import { Box } from '@mui/material';

function ProjectItem({ image, site, demo, npm, source, title, description, alt }) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
         mt={{ xs: '4.5rem', md: '5.5rem' }}>
         {image && (
            <Box className={Style.laptop}>
               <Box className={Style.lid}>
                  <Box className={Style.screen}>
                     <Box component={'img'} src={image} alt={alt || title} />
                  </Box>
               </Box>
               <Box className={Style.base} />
               <Box className={Style.foot} />
            </Box>
         )}
         <h1 className={Style.title}>{title}</h1>
         <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {site && <IconLink link={site} title={'client website'} icon={'fa fa-globe'} />}
            {demo && <IconLink link={demo} title={'live demo'} icon={'fa fa-safari'} />}
            {npm && <IconLink link={npm} title={'npm package'} icon={'fa fa-cube'} />}
            {source && <IconLink link={source} title={'source code'} icon={'fa fa-code'} />}
         </Box>
      </Box>
   );
}

export default ProjectItem;