import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ---left--- */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laudantium. Laboriosam asperiores atque hic earum soluta at fuga sapiente amet quam itaque a  abv bcdf avfvhbj hbvjbkn abvcfv</p>

        </div>
        {/* ---center--- */}
        <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>HOME</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
        </ul>
        </div>
            
        
        {/* ---right--- */}
        <div>
            <p className='text-xl font-medium mb-5'>Get IN TOUCH</p>
            <ul  className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>abcdev@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ----copyright--- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>

      </div>
    </div>
  )
}

export default Footer
