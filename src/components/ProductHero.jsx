import React from 'react'
import hero1 from "../assets/Hero Image 1.jpg"
import hero2 from "../assets/Hero Image 2.jpg"


function ProductHero() {
    return (
        <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] mx-auto'>
            <div className='md:flex gap-20 w-full items-center text-center md:justify-between'>
                <div className='md:w-1/2 text-left'>
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Help your team to focus on priority tasks</h1>
                    <p className='py-10 text-sm md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque</p>
                </div>
                <div className='flex items-center gap-4 mx-auto'>
                    <div className='pt-56 flex-col'>
                        <div className='ml-auto my-auto w-6 p-3 left-0 max-w-max bg-[#F24C27] block rounded-br-lg'>
                        </div>
                        <div className='w-full h-auto pt-2'>
                            <img src={hero1} alt='' className='max-w-full w-auto h-32 object-cover md:py-0 py-4 md:mx-0 mx-auto rounded-tl-[3rem]' />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-full h-auto'>
                            <img src={hero2} alt='' className='max-w-full w-auto h-96 object-cover md:py-0 py-4 md:mx-0 mx-auto rounded-br-[5.5rem]' />
                        </div>
                        <div className='relative my-auto w-6 p-3 max-sm:-top-[10.25rem] -top-[11.25rem]  text-left bg-[#F24C27] block rounded-br-lg'>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductHero