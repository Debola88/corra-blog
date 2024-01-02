import React from 'react'
import image from '../assets/Image (18).jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function BlogHero() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] h-auto my-auto mx-auto'>
            <div className='md:flex gap-20 w-full items-center text-center md:justify-between'>
                <div className='md:w-1/2 text-left'  data-aos="fade-right" data-aos-duration="1500">
                    <p className='text-[#232ED1] text-sm font-semibold'>1 Jan 2024</p>
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold font-Bodoni'>Brand Positioning that you can`t ignore in 2021</h1>
                    <p className='py-10 font-semibold md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                </div>
                <div className='items-center mx-auto' data-aos="fade-down-left" data-aos-duration="1200">
                    <div className='flex gap-4'>
                        <div className='mb-auto w-6 p-3 text-left bg-[#232ED1] block rounded-br-lg'>
                        </div>
                        <div className='w-full h-auto'>
                            <img src={image} alt='' className='max-w-full w-auto h-96 object-cover md:py-0 py-4 md:mx-0 mx-auto rounded-3xl' />
                        </div>
                        <div className='mt-auto w-6 p-5  text-left bg-[#F24C27] block rounded-tl-lg'>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogHero