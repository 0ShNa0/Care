import React,{useState} from 'react';
import listOfCompanies from '../utils/ListAttendants';
import AttendantsCard from '../components/AttendantsCard';
import { Typewriter } from 'react-simple-typewriter';

const Attendants = () => {
  
   const[showTypewriter,setShowTypewriter]=useState(true);
  const handleTypewriterComplete = () => {
   
    setShowTypewriter(false);
  };

  return (
    <div>
 
     
        
    {listOfCompanies.map(company => (
      <AttendantsCard
       img={company.img}
        name={company.name}
        phone={company.phone}

        services={company.services}
        sitelink={company.sitelink}
      />
    ))}


  </div>
    
  )
}

export default Attendants;