import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
  
const LocalityMenu = ({ locality, handleLocalityChange,localities}) => {
   
      return (
        <div style={{width:"95%",justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"20px",marginTop:"50px"}}>
        <Autocomplete
         
          value={locality}
          onChange={(event, newValue) => handleLocalityChange(newValue)}
          options={localities}
          renderInput={(params) => (
            <TextField {...params} label="Select closest area"/>
          )}
        />
        </div>
      );
    
}

export default LocalityMenu;