import React from 'react';
import { Paper, AppBar, Toolbar, Typography, Stack, useMediaQuery, useTheme, Hidden } from '@mui/material'; // Assuming you are using Material-UI
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile-sized

  return (
    <Paper elevation={3} style={{ position: 'sticky', top: 0, zIndex: 999 }}>
      <AppBar position="static" elevation={8} sx={{ width: '100%', bgcolor: '#e1f5fe', boxShadow: 'initial' }}>
        <Toolbar>
          <Stack
            direction={isMobile ? 'column' : 'row'} // Display as column on mobile, row on larger screens
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%', px: '20px', mb: '20px', mt: '20px' }}
          >
            <Typography component="div">
              <Link to="/" style={{ textDecoration: 'none', color: '#2196f3', fontFamily: 'Playfair Display' }}>
                Caregiver
              </Link>
            </Typography>
            <Hidden smDown> {/* Hide on mobile screens */}
              <Stack direction="row" spacing={2}>
                <Link to="/" style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}>
                  Home
                </Link>
                <Link
                  to="/about"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}
                >
                  About
                </Link>
                <Link
                  to="/counselors"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}
                >
                  Mental Health Specialists
                </Link>
                <Link
                  to="/attendants"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}
                >
                  Attendants
                </Link>
                <Link
                  to="/emergency"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}
                >
                  Emergency&FirstAid
                </Link>
                <Link
                  to="/blogs"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' }}
                >
                  Blogs
                </Link>
              </Stack>
            </Hidden>
          </Stack>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Header;
