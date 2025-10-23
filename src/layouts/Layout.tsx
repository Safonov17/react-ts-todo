import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

export const Layout = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<link
					href='https://fonts.googleapis.com/css?family=Roboto:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic'
					rel='stylesheet'
				/>
			</Helmet>
			<Header />
			<Outlet />
		</HelmetProvider>
	)
}
