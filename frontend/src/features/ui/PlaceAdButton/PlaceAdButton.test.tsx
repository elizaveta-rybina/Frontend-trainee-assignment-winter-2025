import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { PlaceAdButton } from './PlaceAdButton'

// Мокаем useNavigate
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn()
}))

describe('PlaceAdButton', () => {
	test('рендерит кнопку с текстом', () => {
		const mockedNavigate = jest.fn()
		;(useNavigate as jest.Mock).mockReturnValue(mockedNavigate)

		render(
			<MemoryRouter>
				<PlaceAdButton />
			</MemoryRouter>
		)

		expect(screen.getByText('Разместить объявление')).toBeInTheDocument()
	})

	test('при клике вызывает navigate("/form")', () => {
		const mockedNavigate = jest.fn()
		;(useNavigate as jest.Mock).mockReturnValue(mockedNavigate)

		render(
			<MemoryRouter>
				<PlaceAdButton />
			</MemoryRouter>
		)

		fireEvent.click(screen.getByText('Разместить объявление'))

		expect(mockedNavigate).toHaveBeenCalledWith('/form')
	})
})
