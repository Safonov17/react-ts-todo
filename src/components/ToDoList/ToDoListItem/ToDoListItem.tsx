import { Task } from '../../../models/todo-item'
import './ToDoListItem.scss'

export const ToDoListItem = (props: {
	task: Task
	updateToDo: Function
	deleteToDo: Function
}) => {
	return (
		<li className='todo-list-item__wrapper'>
			<span>{props.task.text}</span>
			<div className='todo-list-item__buttons'>
				<button
					className='btn-trash'
					onClick={() => props.deleteToDo(props.task)}
				></button>
				<button
					className={props.task.isDone ? 'btn-check' : 'btn-uncheck'}
					onClick={() => props.updateToDo(props.task)}
				></button>
			</div>
		</li>
	)
}
