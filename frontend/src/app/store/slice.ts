import type { AnyItem } from '@/shared'
import {
	createEntityAdapter,
	createSlice,
	isAnyOf,
	PayloadAction
} from '@reduxjs/toolkit'
import { createItem, deleteItem, fetchItems, updateItem } from './thunks'

export const itemsAdapter = createEntityAdapter<AnyItem>()

type AdditionalFields = {
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState = itemsAdapter.getInitialState<AdditionalFields>({
	status: 'idle',
	error: null
})

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		clearError: state => {
			state.error = null
		},
		clearAll: state => {
			itemsAdapter.removeAll(state)
			state.status = 'idle'
			state.error = null
		}
	},
	extraReducers: builder => {
		builder
			.addCase(
				fetchItems.fulfilled,
				(state, action: PayloadAction<AnyItem[]>) => {
					itemsAdapter.setAll(state, action.payload)
					state.status = 'succeeded'
					state.error = null
				}
			)
			.addCase(
				createItem.fulfilled,
				(state, action: PayloadAction<AnyItem>) => {
					itemsAdapter.addOne(state, action.payload)
					state.error = null
				}
			)
			.addCase(
				updateItem.fulfilled,
				(state, action: PayloadAction<AnyItem>) => {
					itemsAdapter.upsertOne(state, action.payload)
					state.error = null
				}
			)
			.addCase(deleteItem.fulfilled, (state, action: PayloadAction<string>) => {
				itemsAdapter.removeOne(state, action.payload)
				state.error = null
			})
			.addMatcher(
				isAnyOf(
					fetchItems.pending,
					createItem.pending,
					updateItem.pending,
					deleteItem.pending
				),
				state => {
					state.status = 'loading'
				}
			)
			.addMatcher(
				isAnyOf(
					fetchItems.rejected,
					createItem.rejected,
					updateItem.rejected,
					deleteItem.rejected
				),
				(state, action) => {
					state.status = 'failed'
					state.error =
						(action.payload as any)?.error ||
						action.error?.message ||
						'Request failed'
				}
			)
	}
})

export const { clearError, clearAll } = itemsSlice.actions

export const selectItemsState = (state: any) => state.items

export default itemsSlice.reducer
