import { ArrowRight } from 'lucide-react' // опционально: иконка
import { useNavigate } from 'react-router-dom'
import styles from './ViewDetailsButton.module.scss'

interface ViewDetailsButtonProps {
	itemId: string | number
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary'
	children?: React.ReactNode
}

const ViewDetailsButton = ({
	itemId,
	size = 'medium',
	variant = 'primary',
	children = 'Подробнее'
}: ViewDetailsButtonProps) => {
	const navigate = useNavigate()

	const handleClick = () => {
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

	return (
		<button
			className={`
        ${styles['view-details-button']}
        ${sizeClass}
        ${variantClass}
      `.trim()}
			onClick={handleClick}
		>
			<span className={styles['view-details-button__text']}>{children}</span>
			<ArrowRight className={styles['view-details-button__icon']} />
		</button>
	)
}

export default ViewDetailsButton
