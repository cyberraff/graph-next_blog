import React, { useRef, useState, useEffect } from 'react'

import { submitComment } from '../services';

const CommentsForm = ( { slug } ) => {
	const [ error, setError ] = useState ( false );
	const [ localStorage, setLocalStorage ] = useState ( null );
	const [ showSuccessMessage, setShowSuccessMessage ] = useState ( false );
	const nameEl = useRef ();
	const emailEl = useRef ();
	const storeDataEl = useRef ();
	const commentEl = useRef ()
	useEffect ( () => {
		nameEl.current.value = window.localStorage.getItem ( 'name' )
		emailEl.current.value = window.localStorage.getItem ( 'email' )
	}, [] );
	
	
	function handleCommentSubmission ( key ) {
		
		const { value : comment } = commentEl.current
		const { value : name } = nameEl.current
		const { value : email } = emailEl.current
		const { checked : storeData } = storeDataEl.current
		
		if ( ! comment || ! name || ! email ) {
			setError ( true );
		}
		const commentObj = { name, email, comment, slug };
		
		if ( storeData ) {
			window.localStorage.setItem ( 'name', name )
			window.localStorage.setItem ( 'email', email )
		} else {
			window.localStorage.removeItem ( 'name', name )
			window.localStorage.removeItem ( 'email', email )
		}
		submitComment ( commentObj )
			.then ( ( res ) => {
				setShowSuccessMessage ( true )
				setTimeout ( () => {
					setShowSuccessMessage ( false )
				}, 3000 )
			} )
	}
	
	return (
		<div className = 'bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
			<h3 className = 'text-xl mb-8 font-semibold border-b pb-4'>
				Leave A Reply
			</h3 >
			<div className = 'grid grid-cols-1 gap-4 mb-4'>
	            <textarea
		            name = 'comment'
		            id = 'comment'
		            ref = { commentEl }
		            placeholder = 'Comments'
		            className = 'bg-gray-200 w-full  rounded-lg p-4 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
	            />
			</div >
			<div className = 'grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
				<input
					type = 'text' ref = { nameEl }
					className = 'bg-gray-200 w-full p-2 px-4 rounded-lg py-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder = 'Name'
					name = 'name'
				/>
				<input
					type = 'text' ref = { emailEl }
					className = 'bg-gray-200 w-full p-2 px-4 rounded-lg py-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder = 'Email'
					name = 'email'
				/>
			</div >
			<div className = 'grid grid-cols-1 gap-4 mb-4'>
				<div >
					<input ref = { storeDataEl } type = 'checkbox' name = 'storeData' id = 'storeData' value = 'true' />
					<label htmlFor = 'storeData' className = 'text-gray-500 cursor-pointer text-sm ml-2'>
						Save my credentials for next time i comment
					</label >
				</div >
			</div >
			{ error && <p className = 'text-xs text-red-500'>All fields are required</p > }
			<div className = 'mt-8'>
				<button
					type = 'button' onClick = { handleCommentSubmission } className = 'transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer
                       '
				>Submit comment
				</button >
				{ showSuccessMessage && <span
					className = 'text-sm float-right font-bold mt-3 text-pink-600'
				>Comment Submitted for review </span > }
			</div >
		</div >
	)
}

export default CommentsForm
