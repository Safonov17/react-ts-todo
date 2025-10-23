import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Task } from '../models/todo-item'

export const ItemDescription = ({ todos }: { todos: Task[] }) => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [todo, setTodo] = useState<Task>()

	useEffect(() => {
		const searchTodo = todos.find(todo => String(todo.id) === id)

		if (searchTodo) {
			setTodo(searchTodo)
		} else {
			navigate('/PageNotFound')
		}
	}, [todos, id, navigate])

	return (
		<div className='wrapper'>
			<h1>{todo?.text}</h1>
		</div>
	)
}
