import React from 'react'
import { FaThumbsUp } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoRibbon } from "react-icons/io5";


function WhyPage() {
    return (
        <div className='flex max-md:flex-col pb-10 md:px-16 px-5 gap-20 justify-center text-center items-center mx-auto'>
            <div className='text-left'>
                <p className='text-blue-800 text-sm font-semibold'>why Choose us?</p>
                <h1 className='text-3xl text-black font-bold py-6'>Premium features for competitive price</h1>
                <p className='text-sm'>Vestibulum ante ipsum primis in faucibus orci luctus et<br /> ultrices posuere cubilia curae; Ut nec turpis tristique,<br /> egestas lacus at, cursus arcu</p>
            </div>
            <div className='flex gap-10'>
                <div className='flex-col pt-10'>
                    <div className='pb-10'>
                        <div className='py-16 px-14 rounded-lg bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133]'></div>
                    </div>
                    <div>
                        <div className='py-16 px-14 rounded-lg bg-gradient-to-b from-[#FFD9D033] to-[#F24C2733]'></div>
                    </div>
                </div>
                <div className='flex-col'>
                    <div className='pb-10'>
                        <div className='py-16 px-14 rounded-lg bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133]'></div>
                    </div>
                    <div>
                        <div className='py-16 px-14 rounded-lg bg-gradient-to-b from-[#FFD9D033] to-[#F24C2733]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyPage