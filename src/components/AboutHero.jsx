import React from 'react'

function AboutHero() {
    return (
        <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] h-auto mx-auto'>
            <div className='md:flex gap-20 w-full items-center text-center md:justify-between'>
                <div className='md:w-1/2 text-left' data-aos="fade-right" data-aos-duration="1500">
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold font-Bodoni'>About US</h1>
                    <p className='py-10 font-semibold md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                </div>
                <div className='mx-auto relative top-28'>
                    <div className='flex gap-4 items-end'>
                        <div className=' w-6 p-6 h-4 max-w-max bg-[#F24C27] block rounded-tl-2xl'>
                        </div>
                        <div className='  w-16 h-10 p-10 max-w-max bg-[#232ED1] block rounded-br-2xl'>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className=' w-16 h-10 p-10  text-left bg-[#232ED1] block rounded-br-2xl'>
                        </div>
                        <div className='w-6 p-6 h-4  max-w-max bg-[#F24C27] block rounded-tl-2xl'>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutHero