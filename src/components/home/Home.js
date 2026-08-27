import LoadTransition from '../common/LoadTransition';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function Home() {

   return (
      <LoadTransition>
         <Box component={'main'} display={'flex'} flexDirection={'column'} minHeight={'calc(100vh - 175px)'}>
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
               justifyContent={'center'} flexGrow={1}>
               <Box className={`${Style.avatar} shadowed`} alt={'Justin taking a break to look at the camera'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                  height={{ xs: '35vh', md: '40vh' }} maxWidth={{ xs: '50vw', md: '30vw' }} maxHeight={{ xs: '50vw', md: '30vw' }}
                  borderRadius={'50%'} p={'0.75rem'} mt={{ xs: '2rem', md: 0 }} mb={{ xs: '2rem', md: 0 }} mr={{ xs: 0, md: '2rem' }} />
               <Box>
                  <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                  </h1>
                  <h2>{info.position}</h2>
                  <Box component={'ul'} p={'0.8rem'} className={Style.miniBio}>
                     {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} link={bio.link} />
                     ))}
                  </Box>
               </Box>
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} mt={'2rem'} mb={'-1rem'} lineHeight={1} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </LoadTransition>
   );
}