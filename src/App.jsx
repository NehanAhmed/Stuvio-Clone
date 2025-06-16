import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero_2 from './Components/Hero_2'
import FeauturedWork from './Components/FeauturedWork'
import About from './Components/About'
import Roles from './Components/Roles'
import Footer from './Components/Footer'
import { motion } from 'motion/react'
import { filter, text } from 'motion/react-m'

const App = () => {
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setcursorVariant] = useState("default")
  useEffect(() => {
    const handleMouseMove = (event) => {
      setmousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  const variants = {
    default: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 1,
      backgroundColor: "black",
      opacity: 1,
       width: "30px",
      height: "30px",
      // border: "3px solid purple",
    },
    hovered: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      width: "150px",
      height: "150px",
      backgroundColor: "#ffffff",
      // mixBlendMode: "difference",
      opacity: 0.8,
      scale: 1,
      border: "1px solid rgba(255,255,255,0.4)",
    },
    roleHover: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 1,
      width: "30px",
      height: "30px",
      backgroundColor: "#ffffff",
      // mixBlendMode: "difference",
      
    }
  }
  return (
    <>
      <motion.div variants={variants} animate={cursorVariant} transition={{
        type: "tween",
        ease: "backOut",
      }} className="rounded-full p-3 m-auto bg-black w-0.5 fixed pointer-events-none z-10 flex items-center justify-center">
        <span className={`text-black text-2xl text-center  font-tusker ${cursorVariant === "hovered" ? "opacity-100" : "opacity-0"}`}>
          View 
        </span>
      </motion.div>
      <Navbar />
      <Hero />
      <Hero_2 />
      <FeauturedWork setcursorVariant={setcursorVariant} />
      <About />
      <Roles setcursorVariant={setcursorVariant}/>
      <Footer />

    </>
  )
}

export default App