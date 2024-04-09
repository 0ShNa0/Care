import { Card,Typography,CardHeader,CardContent,CardMedia,Button} from '@mui/material';
import '../App.css';
import React from 'react';
import psych from "../assets/psych.png";
const CounselorsCard = ({name,contact,fees,languages,medium,specialising}) => {

    const phone = contact.replace(/\D/g, '');
    
     return (
       <div
       style={{
           display: 'flex',
         justifyContent:"center",
        position:'relative',
         
       
       }}
     >
       <Card raised={true}  
       sx={{
           width :{sx:'95vw',md:'89vw',lg:'79vw'},
           bgcolor:'#fff',
           maxHeight:{sx:'200px',md:'290px',lg:'420px'},
    
           mt:{sx:'25px',md:'40px',lg:'65px'},
           mb:'10px'
   
      
       }}>
         
            <CardHeader title={<Typography color="black"  justifyContent= 'center' display='flex'
       borderBottom= '3px solid black'  alignItems= 'center' fontSize="26px" fontFamily='Playfair Display'>{name}</Typography>}
         /> 
            < CardContent  style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div style={{ flex: '0 0 30%' }}>
          <CardMedia component="img" height="100%" width="100%" image={psych}  />
          </div>
            <Typography
       fontFamily='Playfair Display' position="relative" marginLeft={"5px"} >
      
   <div>
     <Typography component="span" fontSize="21px" color="grey" fontFamily='Playfair Display'>Fees: </Typography>
     <Typography component="span" fontSize="20px" color="black" fontFamily='Playfair Display'>{fees}</Typography>
   </div>
   <div>
     <Typography component="span" fontSize="21px" color="grey" fontFamily='Playfair Display'>Languages: </Typography>
     <Typography component="span" fontSize="20px" color="black" fontFamily='Playfair Display'>{languages}</Typography>
   </div>
   <div>
     <Typography component="span" fontSize="21px" color="grey" fontFamily='Playfair Display'>Medium: </Typography>
     <Typography component="span" fontSize="20px" color="black" fontFamily='Playfair Display'>{medium}</Typography>
   </div>
   <div>
     <Typography component="span" fontSize="21px" color="grey" fontFamily='Playfair Display'>Area Of Expertise: </Typography>
     <Typography component="span" fontSize="20px" color="black" fontFamily='Playfair Display'>{specialising}</Typography>
   </div>
   <div>
  
   <Button variant="contained" color="primary" href={`tel:${phone}`} style={{ marginRight: '1px',marginTop:'4px'}}>
                 Contact Now: {contact}
               </Button>
              
   </div>
  
           </Typography>
   
            </CardContent>
   
           </Card>
           </div>
     )
   }
   
   export default CounselorsCard;