import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { getFeaturedPosts } from '../services';

function FeaturedPost ( { posts } ) {
	const [ featuredPost, setFeaturedPost ] = useState ( [] )
	const [ bgImage, setBgImage ] = useState ();
	useEffect ( () => {
		getFeaturedPosts ().then ( ( newFeatured ) => setFeaturedPost ( newFeatured ) )
	}, [] )
	return (
		<div className = ' flex'>
			{ featuredPost.map ( ( post ) => {
				return (
					<div
						key = { post.slug }
						style = { {
							// backgroundImage : `rgba(0, 0, 0, 0.7) , url(${ post.featuredImage.url })`,
							backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ post.featuredImage.url })`,
							backgroundSize : 'cover',
							backgroundPosition : 'center',
							backgroundRepeat : 'no-repeat',
							// backgroundBlendMode : 'darken',
							
							zIndex : '-1',
							cursor : 'pointer'
						} }
						className = 'relative flex text-shadow font-bold text-center text-xs  text-white items-center justify-center  mx-4 rounded-lg h-52 w-48 mb-8'
					>
						<div className = ''>
							<p className = 'mb-4'>{ moment ( post.createdAt ).format ( 'MMM DD,' +
								' YYYY' ) }</p >
							
							<h3 className = 'text-xl font-bold mb-8'>{ post.title }</h3 >
							<div
								className = 'flex my-4 items-center content-center justify-center absolute inset-x-0 bottom-0'
							>
								<Image
									src = { post.author.photo.url }
									height = { 30 }
									width = { 30 }
									alt = { post.title }
									className = 'align-middle rounded-full '
								/>
								<p className = 'text-sm font-normal py-1 pl-2'>{ post.author.name }</p >
							</div >
						</div >
					</div >
				)
			} ) }
		</div >
	);
}

export default FeaturedPost;
