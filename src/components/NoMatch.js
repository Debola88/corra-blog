import React from 'react'


const NoMatch = () => {
    return (
        <div className='md:px-60 px-5 grid place-items-center w-full h-screen mx-auto'>
            <div className='relative -top-16'>
                <div className='flex gap-2 items-end justify-center py-4'>
                    <div className=' h-3 w-3 p-2 max-w-max bg-[#F24C27] block rounded-tl'>
                    </div>
                    <div className=' my-auto w-6 p-3 max-w-max bg-[#232ED1] block rounded-br'>
                    </div>
                </div>
                <span className='text-[#232ED1] py-4 font-semibold'>404</span>
                <h1 className='text-4xl font-bold text-black'>Page Not Found</h1>
                <p className='text-sm text-gray-600 py-4'>The page you are looking for doesn't exist or has been moved</p>
                <button className='py-4 px-8 text-white bg-[#F24C27] hover:bg-[#f22727] rounded transition text-sm max-sm:text-xs max-sm:py-2 max-sm:px-5'>Back to Home</button>
            </div>
        </div>
    )
}

export default NoMatch