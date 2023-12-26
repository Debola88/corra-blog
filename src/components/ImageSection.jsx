import React from 'react'
import feedback from '../assets/united_1534959.png'

function ImageSection() {
    return (
        <div className='py-10'>
            <div className='bg-hero-image h-[450px] bg-cover bg-center w-full py-8'>
                <div className='text-center text-black items-center lg:p-16 md:p-5 justify-center mx-auto'>
                    <h1 className='text-4xl font-bold max-sm:text-3xl pb-2'>Keep Your Team Happy</h1>
                    <h2 className='px-10 text-base'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique,
                        <br /> egestas lacus at, cursus arcu. Vestibulum ante ipsum primis in.</h2>
                </div>
                <div className='w-full max-h-[100px] flex justify-center pt-2'>
                    <img src={feedback} alt='' className='w-auto object-contain h-32' />
                </div>
            </div>
        </div>
    )
}

export default ImageSection