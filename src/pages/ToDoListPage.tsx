import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Form } from '../components/Form/Form'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { Task } from '../models/todo-item'

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<Task[]>([])

	const createNewToDo = (text: string) => {
		const newToDo: Task = {
			id: Date.now(),
			text,
			isDone: false
		}
		setTodos([...todos, newToDo])
	}

	const updateToDo = (toDoItem: Task) => {
		const updatedToDos = todos.map(item => {
			if (item.id === toDoItem.id) {
				return { ...item, isDone: !item.isDone }
			}
			return item
		})
		setTodos(updatedToDos)
		notifyByUpdate()
	}

	const deleteToDo = (toDoItem: Task) => {
		const filteredToDos = todos.filter(item => item.id !== toDoItem.id)
		setTodos(filteredToDos)
		notifyByDelete()
	}

	const notifyByUpdate = () => toast('Обновлён статус задачи!')
	const notifyByDelete = () => toast('Задача удалена!')

	return (
		<>
			<div className='wrapper'>
				<Header />
				<Form createNewToDo={createNewToDo} />
				<ToDoList
					todos={todos}
					updateToDo={updateToDo}
					deleteToDo={deleteToDo}
				/>
				<ToastContainer
					position='bottom-right'
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='colored'
				/>
			</div>
		</>
	)
}
