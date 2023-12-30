import React from 'react'

function PricingCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 max-lg:px-5 px-28 gap-20 place-items-center">
            <div className=' text-left max-w-[500px] max-h-[550px] bg-gradient-to-b from-[#FFFFFF] to-[#ECEDFF] rounded p-10'>
                <h1 className='font-bold text-black text-2xl my-2'>Launch</h1>
                <p className='text-2xl font-bold my-4'>$<span className='text-5xl font-bold text-black my-4'>19</span>/mo</p>
                <p className='text-gray-500 font-semibold my-2'>Integer proin ac, lectus proin egestas ultricies. </p>
                <ul className='font-semibold list-image-icon my-8 mx-7'>
                    <li className='my-2'>1GB of storage</li>
                    <li className='my-2'>1 user</li>
                    <li className='my-2'>50 tasks</li>
                </ul>
                <button className='mt-20 w-full py-3 px-8 bg-transparent border rounded font-semibold text-sm border-blue-800 text-blue-800'>Get Started</button>
            </div>
            <div className='text-left max-w-[500px] max-h-[550px] bg-gradient-to-b from-[#FFFFFF] to-[#FFE8E2] rounded p-10'>
                <h1 className='font-bold text-black text-2xl my-2'>Startup</h1>
                <p className='text-2xl font-bold my-4'>$<span className='text-5xl font-bold text-black my-4'>49</span>/mo</p>
                <p className='text-gray-500 font-semibold my-2'>Integer proin ac, lectus proin egestas ultricies. </p>
                <ul className='font-semibold list-image-icons my-8 mx-7'>
                    <li className='my-2'>10GB of storage</li>
                    <li className='my-2'>3 user</li>
                    <li className='my-2'>500 tasks</li>
                    <li className='mt-2'>24/7 support</li>
                </ul>
                <button className='mt-14 w-full py-3 px-8 bg-[#F24C27] border rounded font-semibold text-sm border-[#F24C27] text-white'>Get Started</button>
            </div>
            <div className='text-left max-w-[500px] max-h-[550px] bg-gradient-to-b from-[#FFFFFF] to-[#ECEDFF] rounded p-10'>
                <h1 className='font-bold text-black text-2xl my-2'>Growth</h1>
                <p className='text-2xl font-bold my-4'>$<span className='text-5xl font-bold text-black my-4'>79</span>/mo</p>
                <p className='text-gray-500 font-semibold my-2'>Integer proin ac, lectus proin egestas ultricies. </p>
                <ul className='font-semibold list-image-icon my-8 mx-7'>
                    <li className='my-2'>100GB of storage</li>
                    <li className='my-2'>Unlimited user</li>
                    <li className='my-2'>Unlimited tasks</li>
                    <li className='my-2'>24/7 support</li>
                    <li className='mt-2'>priority</li>
                </ul>
                <button className='mt-6 w-full py-3 px-8 bg-transparent border rounded font-semibold text-sm border-blue-800 text-blue-800'>Get Started</button>
            </div>
        </div >
    )
}

export default PricingCard