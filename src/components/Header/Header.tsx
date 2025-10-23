import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
	const activeLink = ({ isActive }: { isActive: boolean }): string => {
		return isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavLink to='/' className={activeLink}>
					Home
				</NavLink>
				<NavLink to='/todo' className={activeLink}>
					ToDo
				</NavLink>
			</div>
		</header>
	)
}
