import { React, useState } from 'react'

function Contact() {

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div className='grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 min-h-screen md:px-32 px-5 mt-32 pb-20 justify-center mx-auto h-auto'>
            <div className='text-left'>
                <div className='flex gap-2 items-end'>
                    <div className=' h-3 w-3 p-2 left-0 max-w-max bg-[#F24C27] block rounded-tl-lg'>
                    </div>
                    <div className=' my-auto w-6 p-3 left-0 max-w-max bg-[#232ED1] block rounded-br-lg'>
                    </div>
                </div>
                <h1 className='text-black font-bold text-5xl py-4'>Get in touch<br className='max-md:hidden'/> with us </h1>
                <p>49 11th St, San Francisco</p>
            </div>
            <div className="">
                <h2 className='font-semibold text-lg text-left text-black my-2'>We will get back to you as soon as possible.</h2>
                <form className='w-full' id='message'>
                    <div className='flex flex-col'>
                        <div className='flex max-md:flex-col gap-10 py-4'>
                            <input type="text" className='border w-full rounded h-14 p-2' placeholder='First Name' id='name' onChange={handleFirstnameChange}
                                value={firstname} required />
                            <input type="text" className='border  w-full rounded h-14 p-2' placeholder='Middle Name' id='name' onChange={handleFirstnameChange}
                                value={firstname} required/>
                        </div>
                        <div className='py-4'>
                            <input type="email" className='border w-full rounded h-14 p-2' placeholder='Work Email' id='email' onChange={handleEmailChange}
                                value={email} required />
                        </div>
                        <div className='py-4'>
                            <input type="text" className='border w-full rounded h-14 p-2' placeholder='Subject' id='Subject' onChange={handleEmailChange}
                                value={email} required />
                        </div>
                        <div className='py-4'>
                            <textarea placeholder='Message' className='border w-full rounded h-32 p-2' onChange={handleMessageChange}
                                value={message} required />
                        </div>
                        <button type='button' className='text-xs bg-[#F24C27] uppercase py-4  text-white hover:bg-[#F24C27]/90 hover:text-white transition-all duration-200 rounded' >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact