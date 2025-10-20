import { Task } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'

export const ToDoList = (props: {
	todos: Task[]
	updateToDo: Function
	deleteToDo: Function
}) => {
	const checkedList = () => {
		return props.todos
			.filter(item => !item.isDone)
			.map(item => {
				return (
					<ToDoListItem
						task={item}
						key={item.id}
						updateToDo={props.updateToDo}
						deleteToDo={props.deleteToDo}
					/>
				)
			})
	}

	const unCheckedList = () => {
		return props.todos
			.filter(item => item.isDone)
			.map(item => {
				return (
					<ToDoListItem
						task={item}
						key={item.id}
						updateToDo={props.updateToDo}
						deleteToDo={props.deleteToDo}
					/>
				)
			})
	}

	return (
		<div className='todo-container'>
			<ul className='todo-list failed'>{checkedList()}</ul>
			<ul className='todo-list completed'>{unCheckedList()}</ul>
		</div>
	)
}
