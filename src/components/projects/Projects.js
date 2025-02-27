import React, { useState, useEffect, useRef } from 'react';
import ProjectItem from './ProjectItem';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

const useImageLoader = (containerRef) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const images = containerRef.current.getElementsByTagName('img');
        const imagePromises = Array.from(images).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.addEventListener('load', resolve);
                    img.addEventListener('error', resolve); // Handle error cases too
                }
            });
        });

        Promise.all(imagePromises).then(() => setImagesLoaded(true));
    }, [containerRef]);

    return imagesLoaded;
};

export default function Projects() {
    const containerRef = useRef(null);
    const imagesLoaded = useImageLoader(containerRef);

    return (
        <Box ref={containerRef} sx={{ opacity: imagesLoaded ? 1 : 0, transition: 'opacity 0.2s ease' }}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <ProjectItem image={project.image} live={project.live} npm={project.npm} source={project.source} title={project.title} description={project.description} alt={project.alt} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};