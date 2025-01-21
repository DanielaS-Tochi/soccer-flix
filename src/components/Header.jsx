import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { MdAddCircle } from 'react-icons/md';
import useSound from 'use-sound';
import clickSound from '../sounds/zapsplat-soccer-kick.mp3';

const Header = () => {
  const [play] = useSound(clickSound, { volume: 0.5 });

  return (
    <AppBar position="static" sx={{ mb: 2, bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <GiSoccerBall size={28} style={{ marginRight: '8px' }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              '&:hover': {
                color: 'secondary.light',
              },
            }}
          >
            Soccer Flix
          </Typography>
        </Box>

        {/* Botón Home con sonido */}
        <Button
          onClick={() => play()} // Vincula play explícitamente al clic
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{
            mr: 2,
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transform: 'skewX(-45deg)',
              transition: 'left 0.3s ease',
            },
            '&:hover::after': {
              left: '100%',
            },
            '&:hover': {
              bgcolor: 'primary.light',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Home
        </Button>

        {/* Botón New Video con sonido */}
        <Button
          onClick={() => play()} // Vincula play explícitamente al clic
          component={RouterLink}
          to="/new-video"
          color="inherit"
          startIcon={<MdAddCircle />}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transform: 'skewX(-45deg)',
              transition: 'left 0.3s ease',
            },
            '&:hover::after': {
              left: '100%',
            },
            '&:hover': {
              bgcolor: 'primary.light',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          New Video
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
