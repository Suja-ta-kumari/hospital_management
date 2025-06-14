
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div  className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At EduVision, we believe that education should be engaging, personalized, and powered by technology. Our platform blends traditional learning with modern tools like AI tutors, visual concept generation, and interactive content to help students not just learn—but truly understand.</p>
          <p>To empower students across India with free, high-quality learning tools that make education accessible and enjoyable.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We are a passionate group of students, educators, and developers committed to building the future of learning—one smart feature at a time.</p>
        </div>

      </div>



      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-100 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Smater</b>
          <p> Instant Doubt Solving with our AI-powered chatbot</p>

        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-100 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b> simpler</b>
          <p> Free & Accessible—learn anytime, anywhere</p>

        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-100 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>more visual</b>
          <p>Visual Learning using AI-generated images for tough concepts</p>

        </div>
      </div>
      
    </div>
  )
}

export default About
