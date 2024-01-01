import React from 'react'
// import feedback from '../assets/united_1534959.png'
import woman from '../assets/Imge.jpg'

function ImageSection() {
    return (
        <div className='py-10'>
            <div className='my-16 '>
                <div className=' mx-auto h-auto'>
                    <img src={woman} alt='' className='w-full min-h-[400px] object-cover' />
                    <div className='flex gap-4'>
                        <div className='relative ml-auto -mb-40 my-auto text-left rounded-tl-xl w-[65%] max-lg:w-3/4 max-md:-top-40  bg-[#232ED1] -top-28'>
                            <div className=' gap-10 flex max-lg:flex-col p-16  max-md:p-8'>
                                <h2 className='text-2xl max-md:text-xl font-bold text-white'>Keeps Your<br className='md:hidden'/> Team Happy</h2>
                                <p className='text-sm text-white mt-4'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                                Ut nec turpis tristique,egestas lacus at, cursus arcu. Vestibulum ante ipsum primis in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='max-md:bg-none h-auto bg-cover bg-center w-full py-8'>
                <div className='w-full max-h-[100px] flex justify-center pt-2'>
                    <img src={feedback} alt='' className='w-auto object-contain h-32' />
                </div>
            </div> */}
        </div>
    )
}

export default ImageSection