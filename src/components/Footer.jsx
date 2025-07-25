import React from 'react'
import { assets } from '../assets/assets'
import Contact from './Contact';

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark
                    } alt="" />
                    <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui saepe dolore aperiam debitis, tempore perferendis, sequi itaque sed reprehenderit totam error vitae quia libero, nobis officiis labore. Sit, voluptas deleniti!</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col  gap-2text-gray-500'>
                        <a href="#Header" className='text-gray-600 hover:text-white'>Home</a>
                        <a href="#About" className='text-gray-600  hover:text-white'>About</a>
                        <a href="#Contact" className='text-gray-600  hover:text-white'>Contact</a>
                        <a href="#" className='text-gray-600  hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3 '>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-500 mb-4 max-w-80'>The latest news, articles and resources, sent to your inbox  weekly</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* .....copyright.... */}
            <div className='border-t border-gray-700 text-gray-500 text-center py-4 mt-10'>
                Copyright 2025 © Sadia_Chowdhury. All right reserved.
            </div>
        </div>
    )
}

export default Footer