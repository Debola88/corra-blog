import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import image1 from '../assets/Image(9).jpg'
import image2 from '../assets/Image (10).jpg'
import image3 from '../assets/Image (11).jpg'
import image4 from '../assets/Image (12).jpg'
import image5 from '../assets/Image (13).jpg'
import image6 from '../assets/Image (14).jpg'
import image7 from '../assets/Image (15).jpg'
import image8 from '../assets/Image (16).jpg'
import image9 from '../assets/Image (17).jpg'
import { NavLink } from 'react-router-dom'

function Posts() {
    return (
        <div className='py-10'>
            <h1 className='text-3xl text-black  font-bold text-left py-16'>Featured Posts</h1>
            <div className='grid grid-cols-2 gap-10 md:grid-cols-3 w-full'>
                <div className='text-left'>
                    <img src={image1} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className=' text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image2} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className=' text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image3} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className=' text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
            </div>
            <h1 className='text-3xl text-black  font-bold text-left py-16'>All Posts</h1>
            <div className='grid grid-cols-2 gap-10 md:grid-cols-3 w-full'>
                <div className='text-left'>
                    <img src={image4} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className=' text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image5} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className='text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image6} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className='text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image7} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className=' text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image8} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className='text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
                <div className='text-left'>
                    <img src={image9} alt='' className='w-full  h-auto object-contain rounded' />
                    <p className='text-black py-4 font-bold text-lg'>Top 8 Traits of high-growth websites.</p>
                    <p className='text-sm py-2'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
                        Morbi magna orci, ornare vel auctor non, malesuada sed dolor. </p>
                    <NavLink to="/Blog/blogcontent"><span className='flex gap-4 items-center py-4 font-bold cursor-pointer'>Learn More <BsArrowRight /></span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Posts