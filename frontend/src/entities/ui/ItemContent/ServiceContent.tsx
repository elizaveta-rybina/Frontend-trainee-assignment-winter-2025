import { Service } from '@/shared'
import React, { memo } from 'react'
import cls from './Content.module.scss'

interface ServiceContentProps extends Service {}

const ServiceContentComponent: React.FC<ServiceContentProps> = ({
	serviceType,
	experience,
	cost
}) => {
	const formatCost = (value: number): string => value.toLocaleString('ru-RU')

	return (
		<div className={cls.grid} role='region' aria-label='Характеристики услуги'>
			<div className={cls.item}>
				<strong className={cls.label}>Услуга:</strong>
				<span className={cls.value}>{serviceType}</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Опыт:</strong>
				<span className={cls.value}>{experience} лет</span>
			</div>

			<div className={cls.item}>
				<strong className={cls.label}>Стоимость:</strong>
				<span className={cls.value}>{formatCost(cost)} ₽/час</span>
			</div>
		</div>
	)
}

export const ServiceContent = memo(ServiceContentComponent)
