import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SportsSoccer } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'green' }}>
            <Toolbar>
                <SportsSoccer sx={{ mr: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Soccer Flix
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/new-video">New Video</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;