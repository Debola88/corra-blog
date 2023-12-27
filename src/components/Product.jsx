import React from 'react'
import ProductHero from './ProductHero'
import CustomerSupport from './CustomerSupport'
import Features from './Features'
import Feature1 from '../assets/Feature 1 Asset.png'
import Feature2 from '../assets/Feature 2 Asset.png'
import { BsArrowRight } from 'react-icons/bs'
import Man from '../assets/Image (3).jpg'



function Product() {
    return (
        <div>
            <ProductHero />
            <CustomerSupport />
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 items-center max-md:flex-col md:px-28 px-5 mx-auto'>
                <div className=' bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] lg:p-[80px] md:p-[50px] p-[50px] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl'>
                    <img src={Feature1} alt='' className='w-auto max-h-80 mx-auto' />
                </div>
                <div>
                    <div className='text-left'>
                        <p className='text-blue-800 text-sm font-semibold'>Features</p>
                        <h1 className='text-3xl text-black font-bold py-6'>Work from Anywhere</h1>
                        <p className='text-sm'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu</p>
                    </div>
                    <div className='flex items-center gap-4 py-6 font-semibold cursor-pointer'><h3>Learn More</h3> <BsArrowRight /></div>
                </div>
                <div>
                    <div className='text-left'>
                        <p className='text-blue-800 text-sm font-semibold'>Features</p>
                        <h1 className='text-3xl text-black font-bold py-6 max-sm:'>Chat live with the Support Team </h1>
                        <p className='text-sm'>Lobilia curae ut nec turpis tristique, egestas lacus at, cursus arcu</p>
                        <ul className='py-2 text-sm list-disc p-5'>
                            <li>Vestibulum ante ipsum primis in faucibus orci </li>
                            <li>Vestibulum antjidf rimis in faucibus orci</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4 py-6 font-semibold cursor-pointer'><h3>Learn More</h3> <BsArrowRight /></div>
                </div>
                <div className=' bg-gradient-to-b from-[#FFD9D033] to-[#F24C2733] lg:p-[80px] md:p-[50px] p-[50px] rounded-tl-3xl rounded-br-3xl rounded-tr-3xl'>
                    <img src={Feature2} alt='' className='w-auto max-h-80 mx-auto' />
                </div>
            </div>
            <Features />
            <div className='my-16 '>
                <div className='md:px-28 px-5 mx-auto h-auto'>
                    <img src={Man} alt='' className='h-[60hv] object-contain rounded-tl-3xl' />
                    <div className='flex gap-4'>
                        <div className='relative ml-auto -top-8 my-auto w-6 p-3 max-md:-top-11 max-w-max bg-[#232ED1] block rounded-bl-lg'>
                        </div>
                        <div className='relative my-auto text-left rounded-tl-[3rem] w-[35%] max-lg:w-3/4 max-md:w-full  bg-[#F24C27] -top-28'>
                            <div className=' gap-y-10 justify-between items-center p-10  max-md:p-8'>
                                <h2 className='text-2xl max-md:text-xl font-bold text-white'>You + Corrablog = <br />Happy Customers</h2>
                                <p className='text-sm text-white'>Lobilia curae ut nec turpis tristique, egestas lacus at, cursus arcu</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product