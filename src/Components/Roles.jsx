import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const Roles = () => {
    return (
        <section style={{
            backgroundColor: 'rgb(255, 214, 51)'
        }} className=' w-full py-20 px-10 flex  items-center gap-10  text-black  rounded-2xl'>

            <div className='w-full'>
                <div className='flex flex-col items-start justify-center gap-8 w-3xl'>
                    <p className='font-poppins font-semibold'>OPEN ROLES</p>
                    <h1 className='font-tusker font-extrabold text-6xl w-3xl'>LOOKING FOR THE RIGHT JOB?</h1>
                    <p className='font-poppins text-2xl'>Join us and unleash your genius. Do you think outside the box? Or do you want to get rid of the box entirely? Reach out to us or apply to the current open roles.</p>
                    <div className='flex gap-5 mt-5'>
                        <button className='bg-black p-3 w-[100px] rounded-lg text-white'>All</button>
                        <button className='bg-black p-3 w-[100px] rounded-lg text-white'>Design</button>
                        <button className='bg-black p-3 w-[120px] rounded-lg text-white'>Engineering</button>
                        <button className='bg-black p-3 w-[100px] rounded-lg text-white'>Operations</button>
                    </div>

                </div>

                <div className='w-full flex flex-col items-center justify-center mt-8'>
                    <motion.div whileHover={{
                        backgroundColor: 'black',
                        color: 'white',
                    }} className='h-[80px] flex w-full border-b-2 border-black justify-around items-center'>
                        <div>
                            <h1 className='font-tusker text-2xl'>UI/UX DESIGNER</h1>
                        </div>
                        <p className='font-poppins'>Design</p>
                        <div></div>
                        <p classNam e='font-poppins'>Full-Time</p>
                        <div></div>
                        <button className='bg-blue-900 p-3 w-[150px] flex gap-5 rounded-lg text-white'>Learn More <ArrowRight /></button>
                        <div></div>
                    </motion.div>
                    <motion.div whileHover={{
                        backgroundColor: 'black',
                        color: 'white',
                    }} className='h-[80px] flex w-full border-b-2 border-black justify-around items-center'>
                        <div>
                            <h1 className='font-tusker text-2xl'>GRAPHIC DESIGNER</h1>
                        </div>
                        <p className='font-poppins'>Design</p>
                        <div></div>
                        <p classNam e='font-poppins'>Full-Time</p>
                        <div></div>
                        <button className='bg-blue-900 p-3 w-[150px] flex gap-5 rounded-lg text-white'>Learn More <ArrowRight /></button>
                        <div></div>
                    </motion.div>
                    <motion.div whileHover={{
                        backgroundColor: 'black',
                        color: 'white',
                    }} className='h-[80px] flex w-full border-b-2 border-black justify-around items-center'>
                       <div>
                            <h1 className='font-tusker text-2xl'>VR\AR DESIGNER</h1>
                        </div>
                        <p className='font-poppins'>Design</p>
                        <div></div>
                        <p classNam e='font-poppins'>Full-Time</p>
                        <div></div>
                        <button className='bg-blue-900 p-3 w-[150px] flex gap-5 rounded-lg text-white'>Learn More <ArrowRight /></button>
                        <div></div>
                    </motion.div>
                    <motion.div whileHover={{
                        backgroundColor: 'black',
                        color: 'white',
                    }} className='h-[80px] flex w-full border-b-2 border-black justify-around items-center'>
                      <div>
                            <h1 className='font-tusker text-2xl'>UX DESIGN MANAGER</h1>
                        </div>
                        <p className='font-poppins'>Design</p>
                        <div></div>
                        <p classNam e='font-poppins'>Full-Time</p>
                        <div></div>
                        <button className='bg-blue-900 p-3 w-[150px] flex gap-5 rounded-lg text-white'>Learn More <ArrowRight /></button>
                        <div></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Roles