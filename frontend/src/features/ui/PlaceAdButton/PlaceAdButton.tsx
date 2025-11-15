import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import cls from './PlaceAdButton.module.scss'

export interface PlaceAdButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	size?: 'sm' | 'md'
}

export const PlaceAdButton = forwardRef<HTMLButtonElement, PlaceAdButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'sm',
			children = 'Разместить объявление',
			...rest
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={clsx(cls.button, cls[variant], cls[size], className)}
				{...rest}
			>
				{children}
			</button>
		)
	}
)

PlaceAdButton.displayName = 'PlaceAdButton'
