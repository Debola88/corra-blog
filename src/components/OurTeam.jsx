import React from 'react'
import team1 from '../assets/Image (4).jpg'
import team2 from '../assets/Image (5).jpg'
import team3 from '../assets/Image (6).jpg'
import team4 from '../assets/Image (7).jpg'
import team5 from '../assets/Image (8).jpg'
import team6 from '../assets/Image (9).jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function OurTeam() {
    return (
        <div className='md:px-28 px-5 py-4'>
            <div className='flex max-lg:flex-col gap-10'>
                <div className='text-left'>
                    <h1 className='py-4 font-bold text-3xl text-black'>Our Team</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur dipiscing elit.</p>
                </div>
                <div className='grid grid-cols-2 gap-10 md:grid-cols-3'>
                    <div className='text-sm text-left'>
                        <img src={team1} alt='' className='w-full  h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>CEO</p>
                        <p className='font-semibold'>Drogo Blake</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-sm text-left'>
                        <img src={team2} alt='' className='w-full h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>Co-Founder</p>
                        <p className='font-semibold'>Taylor Rose</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-sm text-left'>
                        <img src={team3} alt='' className='w-full h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>Head of Marketing</p>
                        <p className='font-semibold'>Page Ortega</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-sm text-left'>
                        <img src={team4} alt='' className='w-full h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>Head of Design</p>
                        <p className='font-semibold'>Aubrey Harris</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-sm text-left'>
                        <img src={team5} alt='' className='w-full h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>Marketer</p>
                        <p className='font-semibold'>Isabella Bradley</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-sm text-left'>
                        <img src={team6} alt='' className='w-full h-auto object-contain rounded' />
                        <p className='text-[#232ED1] py-2 font-semibold'>Sales Manager</p>
                        <p className='font-semibold'>Basil Rice</p>
                        <div className='flex text-sm gap-4 py-4'>
                            <FaFacebookF className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaXTwitter className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam