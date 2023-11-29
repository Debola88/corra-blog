import React from 'react'
import hero from '../assets/HeroImage.png'

function HomeHero() {
    return (
        <div className='md:flex gap-20 items-center text-center md:justify-between py-14 px-16 max-md:px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133]'>
            <div className='md:w-1/2 text-left'>
                <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Run Your Entire Customer Support Remotely</h1>
                <p className='py-10 text-sm md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque</p>
                <div className='flex gap-10'>
                    <button className='py-3 px-8 text-white bg-blue-700 hover:bg-blue-500 rounded transition text-sm max-sm:text-xs max-sm:py-2 max-sm:px-5'>Get Started For Free</button>
                    <span className='px-4 text-sm max-sm: border-hidden hover:text-slate-500'>Pricing</span>
                </div>
            </div>
            <div className='w-full min-h-[500px]'>
                <img src={hero} alt='' className='max-w-full w-full md:py-0 py-4 md:mx-0 mx-auto' />
            </div>
        </div>
    )
}

export default HomeHero
