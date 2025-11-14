import { ItemCard } from '@/entities/ui/ItemCard/ItemCard'
import { Auto, ItemTypes, RealEstate, Service } from '@/shared'
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
			<h1 className={cls.title}>ItemCard Component Showcase</h1>

			<section className={cls.section}>
				<h2 className={cls.sectionTitle}>Недвижимость</h2>
				<ItemCard item={mockRealEstate} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<h2 className={cls.sectionTitle}>Автомобиль</h2>
				<ItemCard item={mockAuto} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<h2 className={cls.sectionTitle}>Услуга</h2>
				<ItemCard item={mockService} onAction={handleAction} />
			</section>

			<section className={cls.section}>
				<h2 className={cls.sectionTitle}>С кастомной кнопкой</h2>
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
