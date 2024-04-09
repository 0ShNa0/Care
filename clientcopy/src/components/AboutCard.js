
import React from 'react';
import { Card, Typography,CardContent,Box} from '@mui/material';
import '../App.css';
import care from '../assets/care.png';

const AboutCard = () => {
  return (
    <Box display="flex" alignItems="center">
    <img src={care} alt="Care Image" style={{ width: '35%', objectFit: 'cover', marginRight: '16px' ,height:'90%'}} />
    <Card raised sx={{ display: 'flex', bgcolor: '#b3e5fc', borderRadius: 5 ,maxWidth:'48%',alignItems:'right',justifyContent:'right',mt:"70px",position:'relative',padding:"9px"}}>
      
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ mb: 2 }} fontFamily={'Playfair Display'} justifyContent={'center'} display='flex'>
          ABOUT CAREGIVER
        </Typography>
        <Typography fontSize={'17px'} component="div" fontFamily={'Playfair Display'}>
          Caregiver is dedicated to providing unwavering support and invaluable assistance to real life caregivers who tirelessly care for neurodivergent individuals and those facing chronic or serious illnesses. We understand the unique challenges and complexities that come with this vital role, and our mission is to empower caregivers with resources, guidance, and a compassionate community.
          <br />
          <br />
         
 From navigating the healthcare system to managing daily care routines, we strive to equip caregivers with the knowledge and tools they need to enhance the quality of care and maintain their own well-being.
          <br />
          <br />
          At our core, we believe that caregivers are unsung heroes deserving of recognition, support, and gratitude. By fostering a nurturing environment and providing comprehensive resources, we aim to lighten the load and empower caregivers to continue their selfless and invaluable work with strength, resilience, and compassion.
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default AboutCard;
