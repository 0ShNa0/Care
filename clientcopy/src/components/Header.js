import React from 'react';
import { AppBar, Stack ,Paper,Toolbar,Typography} from '@mui/material';
import '../App.css'; 
import {BrowserRouter as Router,Link} from 'react-router-dom';



const Header = () => {
  
  return (
    <Paper elevation={3}  style={{ position: 'sticky', top: 0, zIndex: 999 }} >
    <AppBar position="static" elevation={8} sx={{ width: '100%', bgcolor: '#e1f5fe', boxShadow: 'initial'}}>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%', px: '20px' ,mb:"20px",mt:"20px"}}
        >
          <Typography component="div">
            <Link to="/" style={{ textDecoration: 'none', color: '#2196f3', fontFamily:"Playfair Display",fontSize:"29px"
            }}>
            Caregiver
            </Link>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/" style={{ textDecoration: 'none', color: '#212121', fontFamily:"Playfair Display" ,fontSize:'25px'}}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#212121' , fontFamily:"Playfair Display",fontSize:"25px"}}>
              About
            </Link>
            <Link to="/counselors" style={{ textDecoration: 'none', color: '#212121', fontFamily:"Playfair Display" ,fontSize:"25px"}}>
              Mental Health Specialists
            </Link>
            <Link to="/attendants" style={{ textDecoration: 'none', color: '#212121', fontFamily:"Playfair Display",fontSize:"25px" }}>
              Attendants
            </Link>
            <Link to="/emergency" style={{ textDecoration: 'none', color: '#212121', fontFamily:"Playfair Display",fontSize:"25px"}}>
             Emergency&FirstAid
            </Link>
            <Link to="/blogs" style={{ textDecoration: 'none', color: '#212121' , fontFamily:"Playfair Display",fontSize:"25px"}}>
              Blogs
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
    </Paper>
  );
};

export default Header;