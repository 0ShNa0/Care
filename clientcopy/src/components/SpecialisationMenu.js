import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const SpecialisationMenu = ({field,handlSpecialityChange}) => {
 
  const fieldsList = [ "Psychiatrist",
  "Counsellor/Psychotherapist",
 "Clinical Psychologist"
    
  ];

  return (
    <div style={{width:"95%",justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"20px"}}>
    <Autocomplete
      value={field}
      onChange={(event, newValue) => handlSpecialityChange(newValue)}
      options={fieldsList}
      renderInput={(params) => (
        <TextField {...params} label="Select the speciality" />
      )}
    />
    </div>
  )
}

export default SpecialisationMenu