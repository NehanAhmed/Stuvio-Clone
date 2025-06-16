import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-5 px-20 flex justify-between items-center text-black'>
        <div className="logo">
            <h1 className='text-3xl font-tusker font-mx'>STUVIO</h1>
        </div>
        <div className="flex gap-6">
            <p className='font-tusker font-mx'>WORK</p>
            <p  className='font-tusker font-mx'>SERVICES</p>
            <p  className='font-tusker font-mx'>ABOUT</p>
            <p  className='font-tusker font-mx'>CAREERS</p>
            <p  className='font-tusker font-mx'>CONTACT</p>
        </div>      
    </nav>
  )
}

export default Navbar