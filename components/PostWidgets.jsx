import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts, getSimilarPosts } from '../services'
const PostWidgets = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])
    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) =>
                setRelatedPosts(result),
            )
        } else {
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [slug])
    console.log(relatedPosts)
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <div
                    key={post.title}
                    className='flex items-center w-full mb-4 '>
                    <div className=' flex-none h-12 w-12'>
                        <Image
                            src={post.featuredImage.url}
                            height={100}
                            width={100}
                            alt={post.title}
                            className='align-middle rounded-full '
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>

                        <Link href={`/post/${post.slug}`} className='text-lg'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidgets
