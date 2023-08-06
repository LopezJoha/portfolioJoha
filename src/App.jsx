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
        <button className="sticky top-60 left-0 ... z-10" onClick={handleLanguage}>{language ? 'Spanish' : 'English'}</button>  
         
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={language}/>
          <Hero language={language}/>          
        </div> 
         
        <About language={language}/>       
        <Tech/>
        <Works language={language}/>
        <Feedbacks/>

        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App

//`${}`