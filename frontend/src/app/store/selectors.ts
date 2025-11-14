import type { ItemType } from '@/shared'
import { createSelector } from '@reduxjs/toolkit'
import { itemsAdapter } from './slice'
import type { RootState } from './store'

const { selectAll, selectById, selectIds, selectEntities, selectTotal } =
	itemsAdapter.getSelectors((state: RootState) => state.items)

export const selectAllItems = (state: RootState) => selectAll(state)
export const selectItemById = (state: RootState, id: string) =>
	selectById(state, id)
export const selectItemEntities = (state: RootState) => selectEntities(state)
export const selectItemIds = (state: RootState) => selectIds(state)
export const selectTotalItems = (state: RootState) => selectTotal(state)

export const selectItemsStatus = (state: RootState) => state.items.status
export const selectItemsError = (state: RootState) => state.items.error

export const selectIsLoading = createSelector(
	[selectItemsStatus],
	status => status === 'loading'
)

export const selectItemsByType = (type: ItemType) =>
	createSelector([selectAllItems], items => items.filter(i => i.type === type))
