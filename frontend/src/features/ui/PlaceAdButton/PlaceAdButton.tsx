import clsx from 'clsx'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './PlaceAdButton.module.scss'

interface PlaceAdButtonProps {
	className?: string
}

export const PlaceAdButton = forwardRef<HTMLButtonElement, PlaceAdButtonProps>(
	({ className }, ref) => {
		const navigate = useNavigate()

		return (
			<button
				ref={ref}
				className={clsx(cls.button, className)}
				onClick={() => navigate('/form')}
			>
				Разместить объявление
			</button>
		)
	}
)

// для корректного отображения в React DevTools
PlaceAdButton.displayName = 'PlaceAdButton'
