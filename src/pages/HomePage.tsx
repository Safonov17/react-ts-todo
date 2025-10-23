import { ListItem } from '../components/ListItem/ListItem'
import { Task } from '../models/todo-item'

export const HomePage = ({ todos }: { todos: Task[] }) => {
	return (
	<div className='wrapper'>
			{todos.map((item: Task) => {
				return <ListItem todo={item} key={item.id} />
			})}
		</div>
	)
}
