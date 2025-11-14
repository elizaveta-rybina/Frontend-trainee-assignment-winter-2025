import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import ViewDetailsButton from './ViewDetailsButton'

//функция для роутинга
const renderWithRouter = (component: React.ReactElement) => {
	return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ViewDetailsButton', () => {

	// текст по умолчанию
	it('renders button with default text', () => {
		renderWithRouter(<ViewDetailsButton itemId='123' />)
		expect(
			screen.getByRole('button', { name: /подробнее/i })
		).toBeInTheDocument()
	})

	// кастомный текст
	it('renders button with custom children text', () => {
		renderWithRouter(
			<ViewDetailsButton itemId='123'>Узнать больше</ViewDetailsButton>
		)
		expect(
			screen.getByRole('button', { name: /узнать больше/i })
		).toBeInTheDocument()
	})

	// иконка
	it('renders ArrowRight icon', () => {
		const { container } = renderWithRouter(<ViewDetailsButton itemId='123' />)
		const svg = container.querySelector('svg')
		expect(svg).toBeInTheDocument()
	})

	// классы размеров
	it('applies correct size class', () => {
		const { rerender, container } = renderWithRouter(
			<ViewDetailsButton itemId='123' size='small' />
		)
		let button = container.querySelector('button')
		expect(button?.className).toContain('view-details-button--small')

		rerender(
			<BrowserRouter>
				<ViewDetailsButton itemId='123' size='large' />
			</BrowserRouter>
		)
		button = container.querySelector('button')
		expect(button?.className).toContain('view-details-button--large')

		rerender(
			<BrowserRouter>
				<ViewDetailsButton itemId='123' size='medium' />
			</BrowserRouter>
		)
		button = container.querySelector('button')
		// medium — значение по умолчанию, класс не должен быть добавлен
		expect(button?.className).not.toContain('view-details-button--medium')
	})

	// классы вариантов
	it('applies correct variant class', () => {
		const { container } = renderWithRouter(
			<ViewDetailsButton itemId='123' variant='secondary' />
		)
		const button = container.querySelector('button')
		expect(button?.className).toContain('view-details-button--secondary')
	})

	// навигация по клику
	it('navigates to item details on click', async () => {
		const user = userEvent.setup()
		renderWithRouter(<ViewDetailsButton itemId='456' />)

		const button = screen.getByRole('button', { name: /подробнее/i })
		await user.click(button)

		expect(window.location.pathname).toBe('/item/456')
	})

	// навигация с числовым itemId
	it('handles numeric itemId', async () => {
		const user = userEvent.setup()
		renderWithRouter(<ViewDetailsButton itemId={789} />)

		const button = screen.getByRole('button', { name: /подробнее/i })
		await user.click(button)

		expect(window.location.pathname).toBe('/item/789')
	})
})
