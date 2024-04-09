import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AttendantsCard = ({name,phone,services,img,sitelink}) => {

  const contact = phone.replace(/\D/g, '');
  
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
         
         width :{sx:'96vw',md:'89vw',lg:'81vw'},
         bgcolor:'#e0f7fa',
         maxHeight:{sx:'150px',md:'210px',lg:'440px'},
         overflow: 'auto',
        borderRadius:1,
         mt:{sx:'30px',md:'49px',lg:'80px'},
         
        
    
     }}>
       
          <CardHeader title={<Typography color="black"  justifyContent= 'center' display='flex' borderBottom= '3px solid black'
       alignItems= 'center' fontSize="24px" fontFamily='Playfair Display'>{name}</Typography>}
       />
          < CardContent  style={{ display: 'flex', justifyContent: 'space-between' }} >
          <div style={{ flex: '0 0 60%' }}>
          <CardMedia component="img" height="100%" width="100%" image={img}  />
          </div>
        
          <Typography
     fontFamily='Playfair Display' float="right" position="relative" marginLeft="15px" >
    
 <div>
   <Typography component="span" fontSize="21px" color="primary" fontFamily='Playfair Display' alignContent={'center'} display='flex'>Services Offered</Typography>
 
   <Typography component="span" fontSize="20px" color="black" fontFamily='Playfair Display'>{services}</Typography>
 </div>
 
 <div>
   <br/>
               <Button variant="contained" color="primary" href={`tel:${contact}`} style={{ marginRight: '16px' }}>
                 Contact Now: {phone}
               </Button>
              
               <Button variant="contained" color="primary" href={sitelink} target="_blank" style={{ marginRight: '8px' }}>
                 Go To {name}
               </Button>
             </div>
           
         </Typography>
 
          </CardContent>
 
         </Card>
         </div>
   )
 }
 
 export default AttendantsCard;
 