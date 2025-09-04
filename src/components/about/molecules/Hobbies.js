import React from 'react';
import Style from '../About.module.scss';
import { Box } from '@mui/material';
import { info } from '../../../info/Info';

export default function Hobbies() {
    const firstName = info.firstName.toLowerCase();

    return <>
        <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests</p>
        <p><span style={{ color: info.baseColor }}>hobbies/interests <span className={Style.green}>(main)</span> $</span> ls</p>
        <ul>
            {info.hobbies.map((hobby, index) => (
                // add a zero-width space after underscores for word wrap on mobile
                <li key={index}><Box component={'span'} mr={'0.75rem'}>{hobby.emoji}</Box>{hobby.label.replace(/_/g, '_\u200B')}</li>
            ))}
        </ul>
    </>;
}