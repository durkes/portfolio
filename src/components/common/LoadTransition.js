import React, { useState, useEffect, useRef } from 'react';
import { Box, CircularProgress } from '@mui/material';

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
                    img.addEventListener('error', resolve); // handle error cases too
                }
            });
        });

        Promise.all(imagePromises).then(() => setImagesLoaded(true));
    }, [containerRef]);

    return imagesLoaded;
};

export default function LoadTransition({ children }) {
    const containerRef = useRef(null);
    const imagesLoaded = useImageLoader(containerRef);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        if (!imagesLoaded) {
            const timer = setTimeout(() => {
                setShowSpinner(true);
            }, 500); // only show spinner after timeout
            return () => clearTimeout(timer);
        } else {
            setShowSpinner(false);
        }
    }, [imagesLoaded]);

    return (
        <>
            {!imagesLoaded && showSpinner && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            <Box
                ref={containerRef}
                sx={{
                    opacity: imagesLoaded ? 1 : 0,
                    transition: 'opacity 0.2s ease'
                }}
            >
                {children}
            </Box>
        </>
    );
}