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
    <div className='md:hidden block absolute top-16 w-full z-50 bg-white left-0 ease-in-out  duration-500 shadow-lg'>
      <div className='flex max-md:flex-col gap-10 justify-center px-16 pb-16 items-left font-semibold text-gray-500 text-left h-screen text-lg'>
        <div><nav><NavLink to="/" className='flex gap-2' onClick={handleClick}><span className='text-sm'>HOME</span></NavLink></nav></div>
        <div><nav><NavLink to="/Product" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRODUCT</span></NavLink></nav></div>
        <div><nav><NavLink to="/Pricing" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRICING</span></NavLink></nav></div>
        <div><nav><NavLink to="/About" className='flex gap-2' onClick={handleClick}><span className='text-sm'> ABOUT US</span></NavLink></nav></div>
        <div><nav><NavLink to="/Contact" className='flex gap-2' onClick={handleClick}><span className='text-sm'> CONTACT</span></NavLink></nav></div>
        <div><nav><NavLink to="/Blog" className='flex gap-2' onClick={handleClick}><span className='text-sm'> BLOG</span></NavLink></nav></div>
      </div>
      {/* <ul className="text-sm font-semibold text-center h-screen px-[1.5rem]">
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="/" className='flex gap-2' onClick={handleClick}><span className='text-sm'>HOME</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRODUCT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> PRICING</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> ABOUT US</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> CONTACT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink to="" className='flex gap-2' onClick={handleClick}><span className='text-sm'> BLOG</span></NavLink></nav></li>
      </ul> */}
    </div>
  </>


  return (
    <nav className="fixed top-0 bg-[#ffffff14] left-0 w-full md:shadow-lg z-50 backdrop-blur-lg">
      <div className="h-[10hv] flex justify-between lg:py-5 md:px-16 px-5 py-4 ">
        <div className="flex items-center flex-1">
          <span className='text-3xl max-md:text-2xl font-bold text-blue-800 font-Nav-color uppercase cursor-pointer' onClick={handleNavigate}>CorraBlog</span>
        </div>
        <div className='text-lg flex gap-5 ml-auto justify-end items-center md:hidden'>
          <button className='block md:hidden transition-transform duration-500 text-2xl' onClick={handleClick}>
            {click ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className=''>
            <ul className='flex gap-8 mr-0 text-sm text-black'>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/">HOME</NavLink></nav></li>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/Product">PRODUCT</NavLink></nav></li>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/Pricing">PRICING</NavLink></nav></li>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/About">ABOUT</NavLink></nav></li>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/Contact">CONTACT</NavLink></nav></li>
              <li className='hover:text-[#232ED1] transition cursor-pointer font-semibold'><nav><NavLink to="/Blog">BLOG</NavLink></nav></li>
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