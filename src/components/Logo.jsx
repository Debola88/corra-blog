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
            <div className='p-10 flex max-md:flex-col gap-y-16 gap-x-28 justify-center text-center items-center'>
                <div className='font-bold flex items-center gap-4'><span className='text-2xl'><RxModulzLogo /></span>logoipusum</div>
                <div className='font-bold flex items-center gap-4'><span className='text-2xl'><RxStitchesLogo /></span>logoipusum</div>
                <div className='font-bold flex items-center gap-4'><span className='text-2xl'><GiHarp /></span>logoipusum</div>
                <div className='font-bold flex items-center gap-4'><span className='text-2xl'><PiHamburgerFill /></span>logoipusum</div>
                <div className='font-bold flex items-center gap-4'><span className='text-2xl'><PiSoundcloudLogo /></span>logoipusum</div>
            </div>
        </div>
    )
}

export default Logo