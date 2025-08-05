import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{
        backgroundImage: "url('/header_img.png')"
      }}
      id='Header'>
      <Navbar />
      <motion.div initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <div className='mb-10'>
          <h2 className='text-5xl sm:6xl md:text-[82px] inline-block mx-w-3xl font-semibold pt-10 pb-7'>Find Homes That Fit <br /> Dream Life</h2>
          <p className='bg-black/30 rounded-lg text-lg md:text-xl inline-block mx-w-4xl mb-10 text-white py-1 px-1 md:py-2 md:px-2'>From cozy corners to luxury living — explore properties that match your lifestyle, vision, and budget. Your next home begins here.</p>
        </div>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded-lg'>Browse Properties</a>
          <a href="#Contact" className='bg-blue-500 border-white px-8 py-3 rounded-lg'>Talk to an Expert</a>
        </div>
      </motion.div>
    </div >


  )
}

export default Header;