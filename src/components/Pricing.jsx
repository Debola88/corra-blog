import React from 'react'
import Faq from './Faq'
import CustomerTestimonials from './CustomerTestimonials'
import PricingCard from './PricingCard'

function Pricing() {
    return (
        <div>
            <div className='py-14 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] min-h-[500px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Pricing</h1>
                    <p className='py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing<br className='max-md:hidden' /> elit. Vestibulum vitae nunc vitae neque</p>
                </div>
            </div >
            <div className='relative -top-52 -mb-40'><PricingCard /></div>
            <Faq />
            <CustomerTestimonials />
        </div>
    )
}

export default Pricing