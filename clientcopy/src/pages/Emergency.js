import React,{useState} from 'react'
import EmergencyMenu  from '../components/EmergencyMenu';
import listOfEmergencies from '../utils/ListEmergencies';
import EmergencyCard from '../components/EmergencyCard';

const Emergency = () => {

    const emergencies=[
        "Stopped Heart",
        "Bleeding",
        "Choking",
        "Burns",
        "Blisters",
        "Sprains",
        "Nosebleed",
        "Fracture"

    ]
    const[currEmergency,setEmergency]=useState("");
    const handleEmergencyChange = (selectedEmergency) => {
      setEmergency(selectedEmergency);
    }
    const filterEmergency = (emergencylist,emergency) => {
        return emergencylist.filter(curr => curr.emergency ===emergency);
      };
      const EGuide = filterEmergency(listOfEmergencies,currEmergency);
      const selectedEmergencyInfo = EGuide.length > 0 ? EGuide[0] : null;
  return (
    <div>
   <EmergencyMenu emergency={currEmergency} handleEmergencyChange={handleEmergencyChange} emergencies={emergencies}/>
  { selectedEmergencyInfo && <EmergencyCard emergency={EGuide[0].emergency} steps={EGuide[0].steps}/>}
   </div>
  )
}

export default Emergency;