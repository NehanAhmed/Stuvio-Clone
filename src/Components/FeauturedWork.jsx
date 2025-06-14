import { motion } from 'motion/react'
import React from 'react'

const FeauturedWork = () => {
    
    return (
        <section className='flex flex-col items-center justify-center gap-10 py-20 px-10 rounded-2xl z-10'>
            <div className='flex p-2 w-full max-w-full gap-10'>
                <h1 className='text-7xl font-extrabold font-tusker'>FEATURED WORK</h1>
                <p className='font-poppins text-2xl w-2xl font-medium'>Every project matters; Each client is a big deal. Driven by user-centered design, we amplify productivity and elevate experiences through skill, creativity, and ingenuity.</p>
            </div>            <div className='grid grid-cols-2 gap-5'>
                <div className="w-200 relative">
                    <img
                        src="src\assets\Images\card_image_1.avif"
                        alt="Stuvio Games" 
                        className='rounded-2xl w-full h-full object-cover' />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>STUVIO GAMES</h1>
                        <p className='font-poppins'>GAME DESIGN</p>
                    </div>
                </div>
                <div className="w-200 relative">
                    <img
                        src="src\assets\Images\card_image_2.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Kohrra"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>KOHRRA</h1>
                        <p className='font-poppins'>Title Design and Motion Graphics</p>
                    </div>
                </div>                <div className="w-200 relative">
                    <img
                        src="src\assets\Images\card_image_3.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Rise"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>RISE</h1>
                        <p className='font-poppins'>Branding</p>
                    </div>
                </div>
                <div className="w-200 relative">
                    <img
                        src="src\assets\Images\card_image_4.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Pentacle"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>PENTACLE</h1>
                        <p className='font-poppins'>Branding</p>
                    </div>
                </div>
            </div>
            <motion.div initial="initial" whileHover="hovered" className='flex items-center justify-center mt-15'>
                <motion.h1  variants={{
                    initial: {y: 0, opacity: 1},
                    hovered: {y: "-100%", opacity: 0.8}
                }} className='text-7xl font-tusker '>VIEW ALL PRODUCTS</motion.h1>
                <motion.h1  variants={{
                    initial: {y: "100%", opacity: 1},
                    hovered: {y: 0, opacity: 0.8}
                }} className='text-7xl font-tusker '>VIEW ALL PRODUCTS</motion.h1>
            </motion.div>
        </section>
    )
}

export default FeauturedWork