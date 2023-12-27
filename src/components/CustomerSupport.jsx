import React from 'react'
import { HiChartPie } from "react-icons/hi2";
import { IoRibbon } from "react-icons/io5";
import { MdAdsClick } from "react-icons/md";

function CustomerSupport() {
    return (
        <div className='py-16 md:px-28 px-5 mx-auto'>
            <h1 className='text-left font-bold text-3xl text-black'>Get the best out of your customer<br className='max-md:hidden'/> support with Us</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                <div>
                    <div className='text-center p-8 w-28 h-auto rounded-lg di bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] block'>
                        <div className='relative text-4xl left-2 text-[#232ED1]'><HiChartPie /></div>
                    </div>
                    <div className='my-4 text-left text-black font-bold'>
                        Analytics
                    </div>
                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                </div>
                <div>
                    <div className='text-center p-8 w-28 h-auto rounded-lg bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] block'>
                        <div className='relative text-4xl left-2 text-[#232ED1]'><IoRibbon /></div>
                    </div>
                    <div className='my-4 text-left text-black font-bold'>
                        Best Quality
                    </div>
                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                </div>
                <div>
                    <div className='text-center p-8 w-28 h-auto rounded-lg bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] block'>
                        <div className='relative text-4xl left-2 text-[#232ED1]'><MdAdsClick /></div>
                    </div>
                    <div className='my-4 text-left text-black font-bold'>
                        More Clicks
                    </div>
                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport