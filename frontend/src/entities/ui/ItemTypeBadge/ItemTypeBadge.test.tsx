import { render, screen } from '@testing-library/react'
import { ItemTypeBadge } from './ItemTypeBadge'
import cls from './ItemTypeBadge.module.scss'

describe('ItemTypeBadge', () => {
	it('renders Недвижимость badge with correct label and class', () => {
		render(<ItemTypeBadge type='Недвижимость' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveTextContent('Недвижимость')
		expect(badge).toHaveClass(cls.badge, cls.realEstate)
	})

	it('renders Авто badge with correct label and class', () => {
		render(<ItemTypeBadge type='Авто' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveTextContent('Авто')
		expect(badge).toHaveClass(cls.badge, cls.auto)
	})

	it('renders Услуги badge with correct label and class', () => {
		render(<ItemTypeBadge type='Услуги' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveTextContent('Услуги')
		expect(badge).toHaveClass(cls.badge, cls.services)
	})

	it('applies additional className', () => {
		render(<ItemTypeBadge type='Недвижимость' className='extra' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveClass('extra')
	})

	it('sets aria-label when provided', () => {
		render(<ItemTypeBadge type='Авто' aria-label='Автомобили' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveAttribute('aria-label', 'Автомобили')
	})

	it('uses label as title and aria-label when not provided', () => {
		render(<ItemTypeBadge type='Услуги' />)
		const badge = screen.getByTestId('item-type-badge')
		expect(badge).toHaveAttribute('title', 'Услуги')
		const aria = badge.getAttribute('aria-label')
	})
})
