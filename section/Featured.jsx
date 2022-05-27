import React from 'react';
import { getFeaturedPosts } from '../services';

import { FeaturedPost } from '../components';

function Featured ( { posts } ) {
	return (
		<div className = ''>
			<FeaturedPost
				posts = { posts } className = ''
			/>
		</div >
	);
}

export default Featured;