import React from 'react';
import Style from '../About.module.scss';
import { info } from '../../../info/Info';

export default function AboutMe() {
    const firstName = info.firstName.toLowerCase();

    return <>
        <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat about{firstName} </p>
        <p><span style={{ color: info.baseColor }}>about{firstName} <span className={Style.green}>(main)</span> $ </span>
            {info.bio}
        </p>
    </>;
}