import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'



const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('');
  }

  const content = <>
    <div className='md:hidden backdrop-blur-lg block absolute top-16 w-full left-0'>
      <ul className="text-sm backdrop-blur-lg font-semibold text-left px-[3.5rem] ease-in-out duration-500">
        <li className='border-b-2 my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="/" className='flex gap-2' onClick={handleClick}><span className='text-sm'>HOME</span></NavLink></nav></li>
        <li className='border-b-2 my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRODUCT</span></NavLink></nav></li>
        <li className='border-b-2 my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRICING</span></NavLink></nav></li>
        <li className='border-b-2 my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> ABOUT US</span></NavLink></nav></li>
        <li className='border-b-2 my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> CONTACT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-[#ffffff14] hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> BLOG</span></NavLink></nav></li>
      </ul>
    </div>
  </>


  return (
    <nav className="fixed top-0 bg-[#ffffff14] left-0 w-full md:shadow-lg z-50 backdrop-blur-lg">
      <div className="h-[10hv] flex justify-between lg:py-5 px-5 sm:px-16 py-4 ">
        <div className="flex items-center flex-1">
          <span className='text-3xl font-bold text-black cursor-pointer' onClick={handleNavigate}>CorraBlog</span>
        </div>
        <div className='text-lg flex gap-5 ml-auto justify-end items-center md:hidden'>
          <button className='block md:hidden transition-transform duration-500 text-2xl' onClick={handleClick}>
            {click ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className=''>
            <ul className='flex gap-8 mr-0 text-sm text-black'>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="/">HOME</NavLink></nav></li>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="">PROJECT</NavLink></nav></li>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="">PRICING</NavLink></nav></li>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="">ABOUT US</NavLink></nav></li>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="">CONTACT</NavLink></nav></li>
              <li className='hover:text-[#024E82] transition cursor-pointer font-semibold'><nav><NavLink to="">BLOG</NavLink></nav></li>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
      </div>
    </nav>
  )
}

export default NavBar