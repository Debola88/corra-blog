import React from 'react'
import { PiSoundcloudLogo } from "react-icons/pi";
import { RxStitchesLogo } from "react-icons/rx";
import { RxModulzLogo } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";
import { GiHarp } from "react-icons/gi";


function Logo() {
    return (
        <div className='py-16 md:px-16 px-5'>
            <h2 className='text-center text-base font-semibold'>10,000+ clients who are getting more replies</h2>
            <div className='py-10 place-items-center mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 w-full items-center justify-center'>
                <div className='font-bold flex  gap-4'><span className='text-2xl'><RxModulzLogo /></span>logoipusum</div>
                <div className='font-bold flex  gap-4'><span className='text-2xl'><RxStitchesLogo /></span>logoipusum</div>
                <div className='font-bold flex  gap-4'><span className='text-2xl'><GiHarp /></span>logoipusum</div>
                <div className='font-bold flex  gap-4'><span className='text-2xl'><PiHamburgerFill /></span>logoipusum</div>
                <div className='font-bold flex  gap-4'><span className='text-2xl'><PiSoundcloudLogo /></span>logoipusum</div>
            </div>
        </div>
    )
}

export default Logo