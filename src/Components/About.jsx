import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
const About = () => {
    
  return ( 
    <section style={{
        backgroundColor: 'rgb(20, 20, 20)',
    }} className=' text-white flex flex-col justify-center gap-8 py-20 px-10 rounded-2xl z-10'>

        <div className='w-7xl'>
            <h1 className='font-tusker text-6xl'>We’re a passionate team of designers, developers, strategists, dreamers and do—ers.</h1>
        </div>
        <div className='flex items-start justify-around gap-10 w-full max-w-full mt-5'>
            <img src="src\assets\Images\about-sec-card-img.avif" alt="" className='w-lg rounded-2xl'/>
            <div className='w-2xl flex flex-col items-start justify-center gap-5'>
                <h1 className='font-poppins text-[21px]'>We are fearless creatives — brave enough to imagine and able enough to make it happen. We sculpt products and brands with precision, clarity, innovative thinking, and fine craft.</h1>
                <motion.button whileHover={{
                scale: 1.05,
                }} className='font-poppins cursor-pointer w-[150px] bg-white rounded-2xl text-black flex flex-nowrap flex-0 items-center p-3 gap-3 text-lg'>About Us <ArrowRight/></motion.button>
            </div>
        </div>
    </section>
  )
}

export default About