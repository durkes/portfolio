import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Style from './Home.module.scss';

function EmojiBullet(props) {
    const { emoji, text, link } = props;

    return (
        <Box component={'li'} display={'flex'} alignItems={'baseline'} fontSize={'1rem'} lineHeight={1.4} style={{ cursor: 'default' }}>
            <Box component={'span'} aria-hidden="true" flexShrink={0}
                mr={{ xs: '0.65rem', md: '1.15rem' }} fontSize={'1.5rem'}>{emoji}</Box>
            <Box component={'span'}>{link ? <Link to={link} className={Style.workLink}>{text}</Link> : text}</Box>
        </Box>
    );
}

export default EmojiBullet;
