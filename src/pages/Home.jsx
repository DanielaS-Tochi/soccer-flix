// import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <video
                src="https://www.youtube.com/embed/z5ThJIMUHPg?si=BmbbpRN2Vrbo9ET_"
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }}
            />
            <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', top: '50%', transform: 'translateY(-50%)' }}>
                <Typography variant="h2" fontWeight="bold">
                    Welcome to Soccer Flix
                </Typography>
                <Typography variant="h5" mt={2}>
                    Explore and manage your favorite football highlights.
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;
