import React from 'react';
import {Box, Typography,Paper} from '@mui/material';
import bgc from '../assets/bgc.jpeg';
import bg2 from '../assets/bg2.png';
import '../App.css';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
 

  return (
    <Box  sx={{backgroundImage: `url(${bgc})`,width: '98vw',
    backgroundSize: 'cover',
    height: '85vh',
    display: 'flex' ,
    justifyContent: 'flex-end',
    mt:"45px"
   
    }}>
       
      <Typography fontSize="132px" color="#2196f3" fontFamily='Rubik Doodle Shadow' marginRight='70px' sx={{textAlign:"right"}}>
        Caregiver
      </Typography>
 
      <div style={{
 
  position: 'absolute',
  top: '330px',
  right: '100px',
  fontFamily: 'Rubik Doodle Shadow',
  justifyContent: 'left',
  fontSize:"37px",
  color:'#2196f3'
}}>
      <Typewriter
            words={['Compassion',
              'Support',
              'Assistance',
              'Empathy',
              'Dedication']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={59}
            delaySpeed={1000}
          
          />
    </div>
      </Box>
  )
}

export default Home;