import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/scss/index.scss'
import './assets/scss/normalize.scss'
import { Layout } from './layouts/Layout'
import { HomePage } from './pages/HomePage'
import { ItemDescription } from './pages/ItemDescription'
import { PageNotFound } from './pages/PgeNotFound'
import { ToDoListPage } from './pages/ToDoListPage'

const todos = [
	{ id: 1, text: 'Task 1', isDone: false },
	{ id: 2, text: 'Task 2', isDone: true },
	{ id: 3, text: 'Task 3', isDone: false },
	{ id: 4, text: 'Task 4', isDone: true }
]

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <PageNotFound />,
			children: [
				{
					path: '/',
					element: <HomePage todos={todos} />
				},
				{
					path: '/todo',
					element: <ToDoListPage />
				},
				{
					path: '/list/:id',
					element: <ItemDescription todos={todos} />
				}
			]
		},
		{
			path: '*',
			element: <PageNotFound />
		}
	],
	{ basename: '/app/' }
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
