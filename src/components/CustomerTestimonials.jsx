import React from 'react'
import img1 from '../assets/Image.jpg'
import img2 from '../assets/Image (1).jpg'
import img3 from '../assets/Image (2).jpg'
import { BsStarFill } from 'react-icons/bs'

function CustomerTestimonials() {
    return (
        <div className='py-10 md:px-28 px-5'>
            <h1 className='text-3xl font-bold text-black text-left'>Customer Testimonials</h1>
            <div className='py-10 flex max-md:flex-col gap-10 mx-auto justify-center items-center'>
                <div className='block w-[350px] h-[200px] bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] rounded-xl p-5'>
                    <div className='flex items-center gap-5'>
                        <div className=''>
                            <img src={img1} alt='' className='object-contain w-auto rounded-full max-h-10' />
                        </div>
                        <div className='text-left'>
                            <h2 className='font-semibold text-xl'>Breanna Parker</h2>
                            <span className='flex mt-1 gap-1 text-sm text-[#F24C27]'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </span>
                        </div>
                    </div>
                    <p className='mt-4 text-left text-sm font-semibold'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla.</p>
                </div>
                <div className='block w-[350px] h-[200px] bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] rounded-xl p-5'>
                    <div className='flex items-center gap-5'>
                        <div className=''>
                            <img src={img3} alt='' className='object-contain w-auto rounded-full max-h-10' />
                        </div>
                        <div className='text-left'>
                            <h2 className='font-semibold text-xl'>Andy smith</h2>
                            <span className='flex mt-1 gap-1 text-sm text-[#F24C27]'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </span>
                        </div>
                    </div>
                    <p className='mt-4 text-left text-sm font-semibold'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla.</p>
                </div>
                <div className='block w-[350px] h-[200px] bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] rounded-xl p-5'>
                    <div className='flex items-center gap-5'>
                        <div className=''>
                            <img src={img2} alt='' className='object-contain w-auto rounded-full max-h-10' />
                        </div>
                        <div className='text-left'>
                            <h2 className='font-semibold text-xl'>Chi Badejo</h2>
                            <span className='flex mt-1 gap-1 text-sm text-[#F24C27]'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </span>
                        </div>
                    </div>
                    <p className='mt-4 text-left text-sm font-semibold'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerTestimonials