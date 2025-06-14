import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero_2 from './Components/Hero_2'
import FeauturedWork from './Components/FeauturedWork'
import About from './Components/About'
import Roles from './Components/Roles'
import Footer from './Components/Footer'

const App = () => {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <Hero_2/>
      <FeauturedWork/>
      <About/>
      <Roles/>
      <Footer/>
    </>
  )
}

export default App