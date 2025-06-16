import React from 'react'
import { motion } from 'motion/react'

const FeauturedWork = ({ setcursorVariant }) => {
    const handleMouseEnter = () => {
        setcursorVariant("hovered")
    }
    
    const handleMouseLeave = () => {
        setcursorVariant("default")
    }
    
    return (
        <section className='flex flex-col items-center justify-center gap-10 py-20 px-10 rounded-2xl z-10'>
            <div className='flex p-2 w-full max-w-full gap-10'>
                <h1 className='text-7xl font-extrabold font-tusker'>FEATURED WORK</h1>
                <p className='font-poppins text-2xl w-2xl font-medium'>Every project matters; Each client is a big deal. Driven by user-centered design, we amplify productivity and elevate experiences through skill, creativity, and ingenuity.</p>
            </div>            <div className='grid grid-cols-2 gap-5'>                <motion.div 
                    className="w-200 relative cursor-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="src\assets\Images\card_image_1.avif"
                        alt="Stuvio Games" 
                        className='rounded-2xl w-full h-full object-cover' />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>STUVIO GAMES</h1>
                        <p className='font-poppins'>GAME DESIGN</p>
                    </div>
                </motion.div>                <motion.div 
                    className="w-200 relative cursor-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="src\assets\Images\card_image_2.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Kohrra"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>KOHRRA</h1>
                        <p className='font-poppins'>Title Design and Graphics</p>
                    </div>
                </motion.div>                <motion.div 
                    className="w-200 relative cursor-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="src\assets\Images\card_image_3.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Rise"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>RISE</h1>
                        <p className='font-poppins'>Branding</p>
                    </div>
                </motion.div>                <motion.div 
                    className="w-200 relative cursor-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="src\assets\Images\card_image_4.avif"
                        className='rounded-2xl w-full h-full object-cover'
                        alt="Pentacle"
                    />
                    <div className='absolute bottom-8 left-4 text-white'>
                        <h1 className='font-tusker font-bold text-2xl'>PENTACLE</h1>
                        <p className='font-poppins'>Branding</p>
                    </div>
                </motion.div>
            </div>            <div 
                className='flex flex-col items-center justify-center mt-15 cursor-none relative h-[120px] overflow-hidden text-black'
               
                
            >
                <h1
                   
                    className='text-7xl font-tusker '
                >
                    VIEW ALL PRODUCTS
                </h1>
                
            </div>
        </section>
    )
}

export default FeauturedWork