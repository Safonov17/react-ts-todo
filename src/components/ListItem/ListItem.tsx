import { Link } from 'react-router-dom'
import { Task } from '../../models/todo-item'
import styles from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: Task }) => {
	return (
		<Link
			to={`/list/${todo.id}`}
			className={`${styles.link} ${todo.isDone ? styles.done : styles.undone}`}
		>
			{todo.text}
		</Link>
	)
}
