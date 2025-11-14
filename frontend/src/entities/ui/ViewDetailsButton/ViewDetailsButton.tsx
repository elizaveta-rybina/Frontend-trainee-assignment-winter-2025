import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ViewDetailsButton.module.scss'

interface ViewDetailsButtonProps {
	itemId: string | number
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary'
	children?: React.ReactNode
	onClick?: () => void
	'aria-label'?: string
}

const ViewDetailsButton: React.FC<ViewDetailsButtonProps> = ({
	itemId,
	size = 'medium',
	variant = 'primary',
	children = 'Подробнее',
	onClick,
	'aria-label': ariaLabel
}) => {
	const navigate = useNavigate()

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onClick?.()
		navigate(`/item/${itemId}`)
	}

	const sizeClass =
		size === 'small'
			? styles['view-details-button--small']
			: size === 'large'
			? styles['view-details-button--large']
			: ''

	const variantClass =
		variant === 'secondary' ? styles['view-details-button--secondary'] : ''

	const className = [styles['view-details-button'], sizeClass, variantClass]
		.filter(Boolean)
		.join(' ')

	return (
		<button
			type='button'
			className={className}
			onClick={handleClick}
			aria-label={ariaLabel ?? String(children)}
			data-testid='view-details-button'
		>
			<span className={styles['view-details-button__text']}>{children}</span>
			<ArrowRight className={styles['view-details-button__icon']} />
		</button>
	)
}

export default ViewDetailsButton
