import { useEffect } from 'react';
import React from 'react'
import hero from '../assets/HeroImage.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function HomeHero() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] max-md:h-screen h-auto'>
            <div className='md:flex gap-32 items-center text-center md:justify-between'>
                <div className='md:w-1/2 text-left'  data-aos="fade-right" data-aos-duration="1500">
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold font-Bodoni'>Run Your Entire Customer Support Remotely</h1>
                    <p className='py-10 text-sm md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque</p>
                </div>
                <div className='w-full h-auto' data-aos="fade-down-left" data-aos-duration="1500">
                    <img src={hero} alt='' className='max-w-full w-full md:py-0 py-4 md:mx-0 mx-auto object-contain' />
                </div>
            </div>
            <div className='flex gap-10 text-left py-4 items-center'>
                <button className='py-4 px-8 text-white bg-blue-700 hover:bg-blue-500 rounded transition text-sm max-sm:text-xs max-sm:py-2 max-sm:px-5'>Get Started For Free</button>
                <span className='px-4 text-sm max-sm: border-hidden hover:text-slate-500 cursor-pointer'>Pricing</span>
            </div>
        </div >

    )
}

export default HomeHero
