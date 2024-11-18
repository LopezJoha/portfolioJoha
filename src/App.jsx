import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  ProjectList,
  StarsCanvas,
} from './components'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [language, setLanguage] = useState(true)

  const handleLanguage = () => {
    setLanguage((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <div className={'relative z-0 bg-primary'}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={language} function={handleLanguage} />
          <Hero language={language} />
        </div>

        <About language={language} />
        <Works language={language} />
        <ProjectList language={language} />

        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <Contact language={language} />
      </div>
    </BrowserRouter>
  )
}

export default App
