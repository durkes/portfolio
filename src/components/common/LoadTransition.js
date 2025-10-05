import React, { useState, useEffect, useRef } from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function LoadTransition({ children }) {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const images = containerRef.current?.getElementsByTagName('img');
        if (!images || images.length === 0) {
            setLoading(false);
            return;
        }

        let loadedImages = 0;
        const totalImages = images.length;

        const handleImageLoad = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                setLoading(false);
            }
        };

        Array.from(images).forEach(img => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
                img.addEventListener('error', handleImageLoad);
            }
        });

        return () => {
            Array.from(images).forEach(img => {
                img.removeEventListener('load', handleImageLoad);
                img.removeEventListener('error', handleImageLoad);
            });
        };
    }, []);

    return (
        <>
            {loading && (
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
                    opacity: loading ? 0 : 1,
                    transition: 'opacity 0.2s ease'
                }}
            >
                {children}
            </Box>
        </>
    );
}