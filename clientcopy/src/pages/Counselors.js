import React,{useState} from 'react';
import LocalityMenu from '../components/LocalityMenu';
import listOfCounselors from '../utils/ListCounselors';
import CounselorsCard from '../components/CounselorsCard';
import SpecialisationMenu from '../components/SpecialisationMenu';
const Counselors = () => {
  const [currlocality, setLocality] = useState("");
  const[currfield,setField]=useState("");
  const handleLocalityChange = (selectedLocality) => {
    setLocality(selectedLocality);
  }
  const handlSpecialityChange =(selectedField) =>{
    setField(selectedField);
  }
 
  const filterProfessionalsByLocality = (counselorslist,locality,field) => {
    return counselorslist.filter(professional => professional.locality ===locality && professional.field===field);
  };
  const filteredCounselors = filterProfessionalsByLocality(listOfCounselors,currlocality,currfield);
  const localities = [
       
    "Mumbai",
    "Chhatisgarh",
    "Delhi NCR",
    "Goa",
    "Chennai&T.N.",
    "Kolkata&W.B.",
    "Bangalore",
    "Assam",
    "Kerala",
    "Punjab",
    "Madhya Pradesh",
    "Maharashtra",
    "Rajasthan",
    "Gujarat",
    "Uttarakhand",
    "Andhra Pradesh",
    "Jharkhand",
    "Bihar"
  ];

  return (
    <div>
      <LocalityMenu locality={currlocality} handleLocalityChange={handleLocalityChange} localities={localities}/>
      <SpecialisationMenu field={currfield} handlSpecialityChange={handlSpecialityChange}/>
      {filteredCounselors.map(p => (
      <CounselorsCard 
      
      name={p.name} 
      contact={p.contact} 
      fees={p.fees} 
      languages={p.languages} 
      medium={p.medium} 
      specialising={p.specialising} 
      />

))}
    </div>
  )
}

export default Counselors;