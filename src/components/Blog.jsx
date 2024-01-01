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
        </div>
    )
}

export default Blog