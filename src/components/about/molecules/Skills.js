import React from 'react';
import Style from '../About.module.scss';
import { info } from '../../../info/Info';

export default function Skills() {
    const firstName = info.firstName.toLowerCase();

    return <>
        <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools</p>
        <p><span style={{ color: info.baseColor }}>skills/tools <span className={Style.green}>(main)</span> $</span> ls</p>
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