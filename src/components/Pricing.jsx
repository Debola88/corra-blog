import React from 'react'
import Faq from './Faq'
import CustomerTestimonials from './CustomerTestimonials'
import PricingCard from './PricingCard'

function Pricing() {
    return (
        <div>
            <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] h-screen mx-auto'>
                <div className='text-center'>
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Pricing</h1>
                    <p className='py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Vestibulum vitae nunc vitae neque</p>
                </div>
            </div >
            <PricingCard />
            <Faq />
            <CustomerTestimonials />
        </div>
    )
}

export default Pricing