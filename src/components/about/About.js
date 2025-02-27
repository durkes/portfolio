import React from 'react';
import LoadTransition from '../common/LoadTransition';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../info/Info';


export default function About() {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>

            {info.skills.exposedTo.length > 0 && <>
                <p style={{ color: info.baseColor }}>exposed to</p>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </>}
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    // add a zero-width space after underscores for word wrap on mobile
                    <li key={index}><Box component={'span'} mr={'0.75rem'}>{hobby.emoji}</Box>{hobby.label.replace(/_/g, '_\u200B')}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <LoadTransition>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                <Terminal text={aboutMeText()} />
                <Terminal text={skillsText()} />
                <Terminal text={miscText()} />
            </Box>
        </LoadTransition>
    );
}