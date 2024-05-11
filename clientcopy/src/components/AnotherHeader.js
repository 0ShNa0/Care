
import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography, Stack, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme } from '@mui/material'; // Assuming you are using Material-UI
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile-sized
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Paper elevation={3} style={{ position: 'sticky', top: 0, zIndex: 999 }}>
      <AppBar position="static" elevation={8} sx={{ width: '100%', bgcolor: '#e1f5fe', boxShadow: 'initial' }}>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%', px: '20px', mb: '20px', mt: '20px' }}
          >
            <Typography component="div">
              <Link to="/" style={{ textDecoration: 'none', color: '#2196f3', fontFamily: 'Playfair Display' }}>
                Caregiver
              </Link>
            </Typography>
            {isMobile ? (
              <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon sx={{ color: black }} />
              </IconButton>
            ) : (
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
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: '250px' }}>
          <List>
            <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/counselors" onClick={handleDrawerClose}>
              <ListItemText primary="Mental Health Specialists" />
            </ListItem>
            <ListItem button component={Link} to="/attendants" onClick={handleDrawerClose}>
              <ListItemText primary="Attendants" />
            </ListItem>
            <ListItem button component={Link} to="/emergency" onClick={handleDrawerClose}>
              <ListItemText primary="Emergency&FirstAid" />
            </ListItem>
            <ListItem button component={Link} to="/blogs" onClick={handleDrawerClose}>
              <ListItemText primary="Blogs" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </Paper>
  );
};

export default Header;
