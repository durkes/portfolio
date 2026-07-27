import LoadTransition from '../common/LoadTransition';
import ProjectItem from './ProjectItem';
import { Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Projects() {
    return (
        <LoadTransition>
            <Grid container display={'flex'} justifyContent={'center'} pt={'2.5rem'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <ProjectItem image={project.image} site={project.site} demo={project.demo} npm={project.npm} source={project.source} title={project.title} description={project.description} alt={project.alt} />
                    </Grid>
                ))}
            </Grid>
        </LoadTransition>
    );
};