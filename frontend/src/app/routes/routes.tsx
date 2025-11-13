import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// Ленивая загрузка страниц для оптимизации производительности
const ListPage = lazy(() =>
	import('@/pages').then(m => ({ default: m.ListPage }))
)
const FormPage = lazy(() =>
	import('@/pages').then(m => ({ default: m.FormPage }))
)
const ItemPage = lazy(() =>
	import('@/pages').then(m => ({ default: m.ItemPage }))
)
const NotFoundPage = lazy(() =>
	import('@/pages').then(m => ({ default: m.NotFoundPage }))
)

// Массив маршрутов приложения (удобно добавлять)
export const routes: RouteObject[] = [
	{ path: '/', element: <Navigate to='/list' replace /> },
	{ path: '/list', element: <ListPage /> },
	{ path: '/form', element: <FormPage /> },
	{ path: '/item/:id', element: <ItemPage /> },
	{ path: '*', element: <NotFoundPage /> }
]
