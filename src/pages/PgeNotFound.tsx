import { Link } from 'react-router-dom'

export const PageNotFound = () => {
	return (
		<div className='wrapper'>
			<h1>Page not found</h1>
			<Link
				to='/'
				style={{
					textDecoration: 'none',
					color: 'blue',
					cursor: 'pointer',
					fontSize: '20px',
					fontWeight: 'bold'
				}}
			>
				Home
			</Link>
		</div>
	)
}
