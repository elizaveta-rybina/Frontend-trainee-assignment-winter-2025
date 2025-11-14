import React, { memo } from 'react'
import { ItemBase } from '@/shared'
import cls from './ItemTextContent.module.scss'

type ItemTextContentProps = Pick<
	ItemBase,
	'name' | 'description' | 'location'
> & {
	children?: React.ReactNode
	id?: string
	className?: string
	'data-testid'?: string
}

const ItemTextContentComponent: React.FC<ItemTextContentProps> = ({
	name,
	description,
	location,
	children,
	id,
	className = '',
	'data-testid': dataTestId = 'item-text-content' // для тестов
}) => {
	return (
		<div
			className={[cls.container, className].filter(Boolean).join(' ')}
			id={id}
			data-testid={dataTestId}
			aria-labelledby={id ? `${id}-title` : undefined}
		>
			<h3 className={cls.name} id={id ? `${id}-title` : undefined}>
				{name}
			</h3>

			{description ? <p className={cls.description}>{description}</p> : null}

			{location ? <p className={cls.location}>📍 {location}</p> : null}

			{children ? <div className={cls.details}>{children}</div> : null}
		</div>
	)
}

export const ItemTextContent = memo(ItemTextContentComponent)
