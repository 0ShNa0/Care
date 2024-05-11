
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/AnotherHeader';
import About from './pages/About';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Counselors from './pages/Counselors';
import Emergency from './pages/Emergency';
import Attendants from './pages/Attendants';
import Blogs from './pages/Blogs';

function App() {


  return (
  
    <Box width="450px" sx={{ width: { xl: '900px' } }} m="auto">
        
       <BrowserRouter> 
       <Header/>
        <Routes>      
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/about" element={<About/>} /> 
        <Route exact path="/counselors" element={<Counselors/>} /> 
        <Route exact path="/attendants" element={<Attendants/>} />  
        <Route exact path="/emergency" element={<Emergency/>} /> 
        <Route exact path="/blogs" element={<Blogs/>} /> 
      
         </Routes>
      </BrowserRouter> 
      </Box>

   
  );
}

export default App;
