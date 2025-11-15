import { PlaceAdButton } from '@/features/ui/PlaceAdButton/PlaceAdButton'
import { ItemCardShowcase } from '@/widgets/ItemCardShowcase'
import cls from './ListPage.module.scss'

export const ListPage = () => {
	return (
		<div className={cls.listPage}>
			<h1 className={cls.title}>Объявления</h1>

			<div className={cls.buttonContainer}>
				<PlaceAdButton />
			</div>

			<ItemCardShowcase />
		</div>
	)
}
