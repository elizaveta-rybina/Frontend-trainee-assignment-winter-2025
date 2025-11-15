import { ItemCard } from '@/entities/ui/ItemCard/ItemCard'
import { Auto, RealEstate, Service } from '@/shared'
import React from 'react'
import cls from './ItemCardShowcase.module.scss'
import { mockAuto, mockRealEstate, mockService } from './cfg'

// Тестовые данные
export const ItemCardShowcase: React.FC = () => {
	const handleAction = (item: RealEstate | Auto | Service) => {
		console.log('Action triggered for item:', item)
	}

	return (
		<div className={cls.showcase}>
			<section className={cls.section}>
				<ItemCard item={mockRealEstate} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<ItemCard item={mockAuto} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<ItemCard item={mockService} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<ItemCard
					item={mockRealEstate}
					onAction={handleAction}
					actionLabel='Связаться'
					className={cls.customCard}
				/>
			</section>
		</div>
	)
}
