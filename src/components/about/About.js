import React from 'react';
import LoadTransition from '../common/LoadTransition';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import AboutMe from './molecules/AboutMe';
import Skills from './molecules/Skills';
import Hobbies from './molecules/Hobbies';

export default function About() {
    return (
        <LoadTransition>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                <Terminal text={<AboutMe />} />
                <Terminal text={<Skills />} />
                <Terminal text={<Hobbies />} />
            </Box>
        </LoadTransition>
    );
}