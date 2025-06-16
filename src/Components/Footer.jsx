import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const Footer = () => {
    
  return (
    <section className='py-8 px-6 rounded-2xl z-10'>

        <div className='flex flex-col  justify-center gap-10 py-20 px-10 rounded-2xl z-10'>
            <div className='flex justify-between gap-10'>
                <div className='flex flex-col '>
                    <a href="" className='font-tusker text-2xl'><p></p>HOME</a>
                    <a href="" className='font-tusker text-2xl'><p></p>WORK</a>
                    <a href="" className='font-tusker text-2xl'><p></p>SERVICES</a>
                    <a href="" className='font-tusker text-2xl'><p></p>ABOUT</a>
                    <a href="" className='font-tusker text-2xl'><p></p>CAREER</a>
                    <a href="" className='font-tusker text-2xl'><p></p>CONTACT</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-tusker text-2xl'>FOLLOW US</h1>
                    <a href="" className='underline font-poppins text-lg'>Behance</a>
                    <a href="" className='underline font-poppins text-lg'>Instagram</a>
                    <a href="" className='underline font-poppins text-lg'>Linkedin</a>
                    <a href="" className='underline font-poppins text-lg'>Youtube</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-tusker text-5xl font-extrabold'>LET'S GET TALKING</h1>
                    <motion.button whileHover={{
                    scale: 1.05,
                    }} className='bg-black w-[150px] rounded-2xl text-white flex p-4 gap-2 cursor-pointer'>Contact Us <ArrowRight/></motion.button>
                </div>
            </div>
            <div className='flex flex-col justify-between  mt-10'>
                <div className='flex items-center gap-8'>
                    <h1 className='font-tusker text-10xl'>STUVIO</h1>
                     <motion.video
                className="w-[38rem] rounded-4xl h-2/6 object-cover"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                autoPlay
                muted
                loop
            >x
                <source src="src\assets\Video\hero_video.mp4"/>
            </motion.video>
                </div>
                <div className='flex justify-around gap-4 mt-10 '>
                    <div><p className='font-poppins text-lg '>©2025 Stuvio Digital Private Limited</p></div>
                    <div className='flex gap-4 font-poppins text-lg'>
                        <a className='underline' href="">Contact Us</a>
                        <a className='underline' href="">Privacy Policy</a>
                        <a className='underline' href="">Terms & Condition</a>
                        <a className='underline' href="#">Back to Top</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer