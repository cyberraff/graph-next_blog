import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineCalendar } from 'react-icons/hi'
const PostCard = ({ post }) => {
    return (
        <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
            <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                <Image
                    src={post.featuredImage.url}
                    alt={post.title}
                    layout='fill'
                    priority
                    className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg '
                />
                {/* <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg '
                /> */}
            </div>
            <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <Image
                        src={post.author.photo.url}
                        height={30}
                        width={30}
                        className='align-middle rounded-full'
                        alt={post.author.title}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                        {post.author.name}
                    </p>
                </div>
                <div className='font-medium text-gray-700'>
                    <HiOutlineCalendar className='h-6 w-6 inline mr-2 text-pink-500' />
                    <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p className='text-center text-md text-gray-700 font-normal px-4 lg:px-20 mb-8 '>
                {post.excerpt}
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
