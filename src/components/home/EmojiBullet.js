import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Style from './Home.module.scss';

function EmojiBullet(props) {
    const { emoji, text, link } = props;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
            <Box component={'span'} aria-hidden="true"
                mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box> {link ? <Link to={link} className={Style.workLink}>{text}</Link> : text}
        </Box>
    );
}

export default EmojiBullet;
