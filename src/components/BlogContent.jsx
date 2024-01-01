import React from 'react'
import image from '../assets/Image (19).png'

function BlogContent() {
    return (
        <div className=''>
            <div className='py-14 md:px-28 px-5 bg-gradient-to-b from-[#B6BAFF33] to-[#232ED133] h-auto my-auto mx-auto'>
                <div className='md:flex gap-20 w-full items-center text-center md:justify-between'>
                    <div className='md:w-1/2 text-left'>
                        <p className='text-[#232ED1] text-sm font-semibold'>1 Jan 2024</p>
                        <h1 className='text-black text-4xl max-lg:text-3xl font-bold'>Brand Positioning that you can`t ignore in 2021</h1>
                        <p className='py-10 font-semibold md:w-2/3 md:pl-1 pb-10'>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque .</p>
                    </div>
                    <div className='items-center mx-auto'>
                        <div className='flex gap-4'>
                            <div className='mb-auto w-6 p-3 text-left bg-[#232ED1] block rounded-br-lg'>
                            </div>
                            <div className='w-full h-auto'>
                                <img src={image} alt='' className='max-w-full w-auto h-96 object-cover md:py-0 py-4 md:mx-0 mx-auto rounded-3xl' />
                            </div>
                            <div className='mt-auto w-6 p-5  text-left bg-[#F24C27] block rounded-tl-lg'>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='text-left py-16 md:px-60 px-5'>
                <p className='text-left text-base py-4'>
                    Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci,
                    ornare vel auctor non, malesuada sed dolor. Pellentesque facilisis condimentum nunc, nec
                    placerat eros aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin est metus,
                    bibendum at maximus quis, placerat id sapien. Fusce ipsum quam, placerat sit amet mauris vitae,
                    suscipit ultrices turpis. Etiam ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer
                    commodo id lacus at fringilla.
                </p>
                <p className='font-semibold text-base py-4'>
                    “Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci, ornare vel auctor non,
                    malesuada sed dolor. Pellentesque facilisis”
                </p>
                <ul className='px-5 list-disc text-left py-4 text-sm'>
                    <li>Vestibulum ante ipsum primis in faucibus orci</li>
                    <li>Vestibulum ante ipsum primis in fausdacibus orci</li>
                    <li>Vestibulum antjidf rimis in faucibus orci</li>
                </ul>
                <p className='py-4'>
                    Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci,
                    ornare vel auctor non, malesuada sed dolor. Pellentesque facilisis condimentum nunc, nec
                    placerat eros aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin est metus,
                    bibendum at maximus quis, placerat id sapien. Fusce ipsum quam, placerat sit amet mauris vitae,
                    suscipit ultrices turpis. Etiam ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer
                    commodo id lacus at fringilla.
                </p>
                <p className='py-4'>
                    Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper. Morbi magna orci,
                    ornare vel auctor non, malesuada sed dolor. Pellentesque facilisis condimentum nunc, nec
                    placerat eros aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin est metus,
                    bibendum at maximus quis, placerat id sapien. Fusce ipsum quam, placerat sit amet mauris vitae,
                    suscipit ultrices turpis. Etiam ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer
                    commodo id lacus at fringilla.
                </p>
            </div>
        </div>
    )
}

export default BlogContent