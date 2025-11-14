import { Auto, ItemTypes, RealEstate, Service } from '@/shared'

export const mockRealEstate: RealEstate = {
	id: '1',
	type: ItemTypes.REAL_ESTATE,
	name: 'Квартира в центре',
	description: 'Уютная двухкомнатная квартира с видом на парк',
	location: 'Москва, ул. Пушкина, 10',
	propertyType: 'Квартира',
	area: 65,
	rooms: 2,
	price: 8500000
}

export const mockAuto: Auto = {
	id: '2',
	type: ItemTypes.AUTO,
	name: 'Toyota Camry 2020',
	description: 'Седан в отличном состоянии, полный сервис',
	location: 'Санкт-Петербург',
	brand: 'Toyota',
	model: 'Camry',
	year: 2020,
	mileage: 45000
}

export const mockService: Service = {
	id: '3',
	type: ItemTypes.SERVICES,
	name: 'Обучение веб-разработке',
	description: 'Профессиональное обучение React и TypeScript',
	location: 'Онлайн',
	serviceType: 'Обучение',
	experience: 8,
	cost: 1500
}
