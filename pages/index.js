import Head from 'next/head'
import { PostCard, Categories, PostWidgets } from '../components'
import { getPosts } from '../services'
import FeaturedPosts from '../section/FeaturedPost';
// import Featured from '../section/Featured';

export default function Home ( { posts } ) {
	return (
		<div className = 'container px-10 mx-auto mb-8'>
			<Head >
				<title >Next-Graph Blog</title >
				<link rel = 'icon' href = '/favicon.ico' />
			</Head >
			<FeaturedPosts />
			{/*<Featured posts = { posts } />*/ }
			<div className = 'grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12'>
				<div className = 'col-span-1 lg:col-span-8'>
					{ posts.map ( ( post ) => (
						<PostCard post = { post.node } key = { post.node.title } />
					) ) }
				</div >
				<div className = 'col-span-1 lg:col-span-4'>
					<div className = 'relative lg:sticky top-8'>
						<PostWidgets />
						<Categories />
					</div >
				</div >
			</div >
		</div >
	)
}

export const getStaticProps = async () => {
	const posts = ( await getPosts () ) || []
	
	return {
		props : {
			posts,
		},
	}
}
