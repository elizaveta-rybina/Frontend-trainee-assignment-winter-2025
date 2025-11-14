export const ItemTypes = {
	REAL_ESTATE: 'Недвижимость',
	AUTO: 'Авто',
	SERVICES: 'Услуги'
} as const

export type ItemType = (typeof ItemTypes)[keyof typeof ItemTypes]

export interface ItemBase {
	id: string
	name: string
	description: string
	location: string
	type: ItemType
}

export interface RealEstate extends ItemBase {
	type: typeof ItemTypes.REAL_ESTATE
	propertyType: string
	area: number
	rooms: number
	price: number
}

export interface Auto extends ItemBase {
	type: typeof ItemTypes.AUTO
	brand: string
	model: string
	year: number
	mileage: number
}

export interface Service extends ItemBase {
	type: typeof ItemTypes.SERVICES
	serviceType: string
	experience: number
	cost: number
}

//export type AnyItem = RealEstate | Auto | Service

export interface ItemsState<T extends ItemBase> {
	items: T[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}
