import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>
            {/* Left Section */}
        <div>
            <img src={assets.logo} className='mb-5 w-40' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Prescripto, we make healthcare more accessible. Find trusted doctors, book appointments instantly, and stay on top of your health—anytime, anywhere.</p>
        </div>

        {/* Center Section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-xxxxxxxxxx</li>
                    <li>abc@example.com</li>
            </ul>
        </div>

        </div>
        {/* -----Copyright Text -------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ Raj.dev - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer