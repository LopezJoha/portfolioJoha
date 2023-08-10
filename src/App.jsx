import { BrowserRouter } from "react-router-dom"; 
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import React, { useState, useEffect } from 'react'; 


const App=() =>{
  const [language, setLanguage] = useState(true); 
  
  const handleLanguage = ()=>{
    setLanguage((prevState) => !prevState);
  }
  
  return (
    <BrowserRouter>     
      <div className={"relative z-0 bg-primary"}>        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={language} function={handleLanguage}/>
          <Hero language={language}/>          
        </div> 
         
        <About language={language}/>       
        <Tech/>
        <Works language={language}/>
        {/* <Feedbacks/> */}

        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App

