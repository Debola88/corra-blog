import React from 'react'
import AboutHero from './AboutHero'
import Man from '../assets/Image(3).jpg'
import OurTeam from './OurTeam'


function About() {
    return (
        <div>
            <AboutHero />
            <div className='py-20 md:px-28 px-5 mx-auto text-left'>
                <h1 className='text-3xl text-black font-bold'>Corrablog</h1>
                <p className='text-sm py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla eu lorem rutrum tempus. Integer tincidunt tellus quis est tincidunt auctor.</p>
                <div className=''>
                    <img src={Man} alt='' className='h-[60hv] object-contain rounded-tr-3xl' />
                    <div className='ml-auto mr-20 relative h-14 w-6 p-6 -top-9 bg-[#232ED1] block rounded-br-2xl'>
                    </div>
                    <div className='ml-auto mr-14 relative -mb-10 h-10 w-6 p-4 -top-9 bg-[#F24C27] block rounded-tl-2xl'>
                    </div>
                </div>
                <div className='md:pr-52'>
                    <p className='my-10 font-semibold'>
                        Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed dolor. Pellentesque facilisis condimentum nunc,
                        nec placerat eros aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin est metus, bibendum at maximus quis, placerat id sapien. Fusce ipsum quam, placerat sit amet mauris vitae,
                        suscipit ultrices turpis. Etiam ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer commodo id lacus at fringilla.
                    </p>
                    <p className='font-semibold text-black'>Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed dolor. Pellentesque facilisis</p>
                </div>
            </div>
            <div className='pb-16'>
                <OurTeam />
            </div>
        </div>
    )
}

export default About