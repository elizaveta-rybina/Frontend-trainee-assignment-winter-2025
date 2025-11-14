import { ItemType } from '@/shared'
import clsx from 'clsx'
import React, { memo } from 'react'
import cls from './ItemTypeBadge.module.scss'

interface ItemTypeBadgeProps {
	type: ItemType
	className?: string
	'aria-label'?: string
}

// конфигурация для отображения бейджа в зависимости от типа
const typeConfig = {
	Недвижимость: { label: 'Недвижимость', color: cls.realEstate },
	Авто: { label: 'Авто', color: cls.auto },
	Услуги: { label: 'Услуги', color: cls.services }
} satisfies Record<ItemType, { label: string; color: string }>

const ItemTypeBadgeComponent: React.FC<ItemTypeBadgeProps> = ({
	type,
	className,
	'aria-label': ariaLabel
}) => {
	// получаем конфигурацию для текущего типа (без приведения типов, т.к. typeConfig уже типизирован)
	const cfg = typeConfig[type]

	return (
		<div
			className={clsx(cls.badge, cfg.color, className)}
			aria-label={ariaLabel}
			title={ariaLabel ?? cfg.label}
			data-testid='item-type-badge'
		>
			{cfg.label}
		</div>
	)
}

export const ItemTypeBadge = memo(ItemTypeBadgeComponent)
