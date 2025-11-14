import { RealEstate } from '@/shared'
import React, { memo } from 'react'
import cls from './Content.module.scss'

interface RealEstateContentProps extends RealEstate {}

const RealEstateContentComponent: React.FC<RealEstateContentProps> = ({
	propertyType,
	area,
	rooms,
	price
}) => {
	const formatPrice = (value: number): string => value.toLocaleString('ru-RU')

	return (
		<div
			className={cls.grid}
			role='region'
			aria-label='Характеристики недвижимости'
		>
			<div className={cls.item}>
				<strong className={cls.label}>Тип:</strong>
				<span className={cls.value}>{propertyType}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Площадь:</strong>
				<span className={cls.value}>{area} м²</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Комнат:</strong>
				<span className={cls.value}>{rooms}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Цена:</strong>
				<span className={cls.value}>{formatPrice(price)} ₽</span>
			</div>
		</div>
	)
}

export const RealEstateContent = memo(RealEstateContentComponent)
