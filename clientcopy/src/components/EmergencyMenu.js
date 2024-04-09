import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
  
const EmergencyMenu = ({ emergency, handleEmergencyChange,emergencies}) => {
   
      return (
        <div style={{width:"95%",justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"20px",marginTop:"50px"}}>
        <Autocomplete
         
          value={emergency}
          onChange={(event, newValue) => handleEmergencyChange(newValue)}
          options={emergencies}
          renderInput={(params) => (
            <TextField {...params} label="Select Emergency"/>
          )}
        />
        </div>
      );
    
}

export default EmergencyMenu;