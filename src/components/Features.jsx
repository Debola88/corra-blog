import React from 'react'
import FeatureThree from '../assets/Feature 3 Asset.png'
import FeatureFour from '../assets/Feature 4 Asset.png'
import FeatureFive from '../assets/Feature 5 Asset.png'
import { BsArrowRight } from 'react-icons/bs'

function Features() {


  return (
    <div className='py-10 md:px-28 px-5 mx-auto' >
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 items-center max-md:flex-col'>
        <div className=' bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] lg:p-[80px] md:p-[50px] p-[50px] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl'>
          <img src={FeatureThree} alt='' className='w-auto max-h-80 mx-auto' />
        </div>
        <div>
          <div className='text-left'>
            <p className='text-blue-800 text-sm font-semibold'>Features</p>
            <h1 className='text-3xl text-black font-bold py-6'>Analytics at your fingertips</h1>
            <p className='text-sm'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu</p>
          </div>
          <div className='flex items-center gap-4 py-6 font-semibold cursor-pointer'><h3>Learn More</h3> <BsArrowRight /></div>
        </div>
        <div>
          <div className='text-left'>
            <p className='text-blue-800 text-sm font-semibold'>Features</p>
            <h1 className='text-3xl text-black font-bold py-6'>Stay connected with your customers </h1>
            <p className='text-sm'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu</p>
          </div>
          <div className='flex items-center gap-4 py-6 font-semibold cursor-pointer'><h3>Learn More</h3> <BsArrowRight /></div>
        </div>
        <div className=' bg-gradient-to-b from-[#FFD9D033] to-[#F24C2733] lg:p-[80px] md:p-[50px] p-[50px] rounded-tl-3xl rounded-br-3xl rounded-tr-3xl'>
          <img src={FeatureFour} alt='' className='w-auto max-h-80 mx-auto' />
        </div>
        <div className=' bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] lg:p-[80px] md:p-[50px] p-[50px] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl'>
          <img src={FeatureFive} alt='' className='w-auto max-h-80 mx-auto' />
        </div>
        <div>
          <div className='text-left'>
            <p className='text-blue-800 text-sm font-semibold'>Features</p>
            <h1 className='text-3xl text-black font-bold py-6'>Stay up to date with live alerts</h1>
            <p className='text-sm'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu</p>
          </div>
          <div className='flex items-center gap-4 py-6 font-semibold cursor-pointer'><h3>Learn More</h3> <BsArrowRight /></div>
        </div>
      </div>
    </div>
  )
}

export default Features