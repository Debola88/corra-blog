import React from 'react'
import Posts from './Posts'
import BlogHero from './BlogHero'

function Blog() {
    return (
        <div>
            <BlogHero />
            <div className='md:px-28 px-5 py-5'>
                <Posts />
            </div>

            {/* <div className='text-left'>
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
            </div> */}
        </div>
    )
}

export default Blog