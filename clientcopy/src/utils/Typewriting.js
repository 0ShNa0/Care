{showTypewriter && (<div style={{
 
    position: 'absolute',
     top: '12%',
     left:'20%',
     display:"flex",
    fontFamily: 'Rubik Doodle Shadow',
    justifyContent: 'center',
    fontSize:"37px",
    color:'black',
    marginTop:'1.7%',
    
   }}>
        <Typewriter
              onTypewriterComplete={handleTypewriterComplete}
              words={['Seek professional attendants to assist you now!']}
             
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={59}
              delaySpeed={1000}
            
            />
            </div>)}