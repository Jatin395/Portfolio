import React from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import StylingProject from './Components/StylingProject'
import Experience from './Components/Experience'

export default function App() {
  return (
  <>
  <Background/>
  <Navbar/>
  <Hero/>
  <About/>
  <Experience/>
  <Projects/>  
  <Contact/>
  </>
  )
}
