import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
// import { IoIosArrowForward } from "react-icons/io";
// import { SnackbarProvider, enqueueSnackbar } from 'notistack'
// import { useState } from 'react';


function Footer() {


  // const [email, setEmail] = useState('');
  // const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  // }
  // const handleClick = () => {
  //     // 👇️ clear input value
  //     setEmail('');
  // };

  return (
    <div>
      <div className='bg-gray-200 text-gray-500 mt-20 py-10 text-sm'>
        <div className='md:px-28 px-5 pb-10 mx-auto'>
          <div className='flex gap-2 mx-auto'>
            <div className='relative my-auto p-2 text-left bg-[#F24C27] block -top-48 max-md:-top-[15.5rem] rounded-tl'>
            </div>
            <div className='relative w-full my-auto text-left rounded-bl-lg rounded-tr-lg  bg-[#232ED1] block -top-28'>
              <div className='flex max-md:flex-col gap-y-10 justify-between items-center p-14'>
                <p className='text-2xl font-bold text-white'>Get started<br className='max-md:hidden'/> with <span className='text-3xl max-md:text-2xl font-extrabold text-[#F24C27] font-serif cursor-pointer'>Corra<span className='font-Satisfy'>Blog</span></span> today</p>
                <NavLink to='/pricing'><button className='text-sm rounded py-3 px-8 text-white bg-[#F24C27]'>View Pricing</button></NavLink>
              </div>
            </div>
            <div className='relative my-auto p-2 text-left bg-[#232ED1] block -top-8  max-md:top-[1.5rem] rounded-br'>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center place-items-center max-w-full'>
            <div className='text-left pb-24 pt-2'>
              <h1 className='uppercase font-bold text-black pb-4'>CorraBlog</h1>
              <div className='flex text-base gap-4'>
                <FaFacebookF className='cursor-pointer' />
                <FaInstagram className='cursor-pointer' />
                <FaXTwitter className='cursor-pointer' />
              </div>
            </div>
            <div className='mb-5 text-left'>
              <h3 className='uppercase font-bold pb-4 text-black'>Company</h3>
              <ul className=''>
                <NavLink to='/Product'><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Product</li></NavLink>
                <NavLink to='/Pricing'><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Pricing</li></NavLink>
                <NavLink to='/About'><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>About Us</li></NavLink>
              </ul>
            </div>
            <div className='mb-5 text-left'>
              <h3 className='uppercase font-bold pb-4 text-black'>Legal</h3>
              <ul>
                <NavLink to='/privacy'><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Privacy Policy</li></NavLink>
                <NavLink to='/error404'><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>404</li></NavLink>
                <NavLink to=''><li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Protected Page</li></NavLink>
              </ul>
            </div>
            <div className='mb-5 text-left'>
              <h3 className='uppercase font-bold pb-4 text-black'>Reach us</h3>
              <ul>
                <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Contact us</li>
                <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Email</li>
                <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'>Tel Number</li>
              </ul>
            </div>
          </div>
          <div className='flex max-sm:flex-col gap-10 justify-between items-center mx-auto py-4'>
            <p>49 11th St, San Francisco</p>
            <form className='left-0 flex items-center'>
              <div>
                <input type="email" placeholder='Enter email' className='relative text-left w-60 h-[3.25rem] max-sm:w-44  max-sm:h-[2.75rem] p-2 text-black text-base outline-none rounded-l left-1' required />
              </div>
              <div className='bg-white max-w-max p-1 rounded-r'>
                <button type='submit' className='text-sm max-sm:px-5 max-sm:py-2 rounded py-3 px-8 text-white bg-[#F24C27]'>View Pricing</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-gray-300 bg-[#232ED1]'>
        <p className='text-center text-sm py-3 text-white'> &copy; Copyright Unsaas 2024 by Adebola</p>
      </div>
    </div>

  )

}

export default Footer