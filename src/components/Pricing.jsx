import React from 'react'
import Faq from './Faq'
import CustomerTestimonials from './CustomerTestimonials'
import PricingCard from './PricingCard'

function Pricing() {
    return (
        <div>
            <div className='py-14 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] h-screen mx-auto'>
                <div className='text-center'>
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Pricing</h1>
                    <p className='py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing<br className='max-md:hidden' /> elit. Vestibulum vitae nunc vitae neque</p>
                </div>
            </div >
            <div className='relative -top-72 -mb-56'><PricingCard /></div>
            <Faq />
            <CustomerTestimonials />
        </div>
    )
}

export default Pricing