import { Auto } from '@/shared'
import React, { memo } from 'react'
import cls from './Content.module.scss'

interface AutoContentProps extends Auto {}

const AutoContentComponent: React.FC<AutoContentProps> = ({
	brand,
	model,
	year,
	mileage
}) => {
	const formatNumber = (value: number): string => value.toLocaleString('ru-RU')

	return (
		<div
			className={cls.grid}
			role='region'
			aria-label='Характеристики автомобиля'
		>
			<div className={cls.item}>
				<strong className={cls.label}>Марка:</strong>
				<span className={cls.value}>{brand}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Модель:</strong>
				<span className={cls.value}>{model}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Год:</strong>
				<span className={cls.value}>{year}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Пробег:</strong>
				<span className={cls.value}>{formatNumber(mileage)} км</span>
			</div>
		</div>
	)
}

export const AutoContent = memo(AutoContentComponent)
