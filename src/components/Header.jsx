import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { MdAddCircle } from 'react-icons/md';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <GiSoccerBall size={32} style={{ marginRight: '10px' }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Soccer Flix
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ mr: 2 }}
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to="/new-video"
          color="inherit"
          startIcon={<MdAddCircle />}
        >
          New Video
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;