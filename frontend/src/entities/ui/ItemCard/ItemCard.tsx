import { Auto, ItemBase, ItemTypes, RealEstate, Service } from '@/shared'
import React, { JSX } from 'react'
import { AutoContent, RealEstateContent, ServiceContent } from '../ItemContent'
import { ItemTextContent } from '../ItemTextContent/ItemTextContent'
import { ItemTypeBadge } from '../ItemTypeBadge/ItemTypeBadge'
import ViewDetailsButton from '../ViewDetailsButton/ViewDetailsButton'
import cls from './ItemCard.module.scss'

type ItemCardProps<T extends ItemBase> = {
	item: T
	onAction?: (item: T) => void
	actionLabel?: string
	className?: string
}

const isRealEstate = (it: ItemBase): it is RealEstate =>
	it.type === ItemTypes.REAL_ESTATE
const isAuto = (it: ItemBase): it is Auto => it.type === ItemTypes.AUTO
const isService = (it: ItemBase): it is Service =>
	it.type === ItemTypes.SERVICES

function ItemCardComponent<T extends ItemBase>({
	item,
	onAction,
	actionLabel = 'Подробнее',
	className = ''
}: ItemCardProps<T>): JSX.Element {
	const renderContent = (i: ItemBase) => {
		if (isRealEstate(i)) return <RealEstateContent {...i} />
		if (isAuto(i)) return <AutoContent {...i} />
		if (isService(i)) return <ServiceContent {...i} />
		return null
	}

	return (
		<article
			className={`${cls.card} ${className}`.trim()}
			aria-labelledby={`item-${item.id}-title`}
		>
			<ItemTypeBadge type={item.type} className={cls.badge} />
			<ItemTextContent
				name={item.name}
				description={item.description}
				location={item.location}
				id={`item-${item.id}-title`}
			>
				{renderContent(item)}
			</ItemTextContent>

			<ViewDetailsButton itemId={item.id} onClick={() => onAction?.(item)}>
				{actionLabel}
			</ViewDetailsButton>
		</article>
	)
}

// экспорт с сохранением generic типизации для потребителей
export const ItemCard = React.memo(ItemCardComponent) as unknown as <
	T extends ItemBase
>(
	props: ItemCardProps<T>
) => JSX.Element
