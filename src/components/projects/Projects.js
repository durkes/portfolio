import React from 'react';
import LoadTransition from '../common/LoadTransition';
import ProjectItem from './ProjectItem';
import { Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Projects() {
    return (
        <LoadTransition>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <ProjectItem image={project.image} live={project.live} npm={project.npm} source={project.source} title={project.title} description={project.description} alt={project.alt} />
                    </Grid>
                ))}
            </Grid>
        </LoadTransition>
    );
};