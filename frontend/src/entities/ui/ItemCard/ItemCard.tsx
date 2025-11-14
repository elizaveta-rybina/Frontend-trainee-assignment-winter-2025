import { AnyItem, ItemTypes } from '@/shared'
import React, { JSX, memo } from 'react'
import { AutoContent, RealEstateContent, ServiceContent } from '../ItemContent'
import { ItemTextContent } from '../ItemTextContent/ItemTextContent'
import { ItemTypeBadge } from '../ItemTypeBadge/ItemTypeBadge'
import ViewDetailsButton from '../ViewDetailsButton/ViewDetailsButton'
import cls from './ItemCard.module.scss'

interface ItemCardProps {
	item: AnyItem
	onAction?: (item: AnyItem) => void
	actionLabel?: string
	className?: string
}

//для разных типов объявлений рендерим разный контент
const renderContent = (item: AnyItem): JSX.Element | null => {
	switch (item.type) {
		case ItemTypes.REAL_ESTATE:
			return <RealEstateContent {...item} />
		case ItemTypes.AUTO:
			return <AutoContent {...item} />
		case ItemTypes.SERVICES:
			return <ServiceContent {...item} />
		default:
			return null
	}
}

const ItemCardComponent: React.FC<ItemCardProps> = ({
	item,
	onAction,
	actionLabel = 'Подробнее',
	className = ''
}) => {
	const content = renderContent(item)

	return (
		<article
			className={`${cls.card} ${className}`.trim()}
			aria-labelledby={`item-${item.id}-title`} // для доступности
		>
			<ItemTypeBadge type={item.type} className={cls.badge} />
			<ItemTextContent
				name={item.name}
				description={item.description}
				location={item.location}
				id={`item-${item.id}-title`}
			>
				{content}
			</ItemTextContent>

			<ViewDetailsButton
				itemId={item.id}
				onClick={() => onAction?.(item)}
				aria-label={`Открыть ${item.name}`}
			>
				{actionLabel}
			</ViewDetailsButton>
		</article>
	)
}

// чтобы избежать лишних рендеров
export const ItemCard = memo(ItemCardComponent)
