import type { ItemBase } from '@/shared'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:3000/items'

export const fetchItems = createAsyncThunk<ItemBase[]>(
	'items/fetchItems',
	async () => {
		const response = await axios.get<ItemBase[]>(API_URL)
		return response.data
	}
)

export const createItem = createAsyncThunk<
	ItemBase,
	Omit<ItemBase, 'id'>,
	{ rejectValue: { error: string } }
>('items/createItem', async (itemData, { rejectWithValue }) => {
	try {
		const response = await axios.post<ItemBase>(API_URL, itemData)
		return response.data
	} catch (err: any) {
		return rejectWithValue(err.response?.data || { error: 'Network error' })
	}
})

export const updateItem = createAsyncThunk<
	ItemBase,
	{ id: string; data: Partial<Omit<ItemBase, 'id' | 'type'>> },
	{ rejectValue: { error: string } }
>('items/updateItem', async ({ id, data }, { rejectWithValue }) => {
	try {
		const response = await axios.put<ItemBase>(`${API_URL}/${id}`, data)
		return response.data
	} catch (err: any) {
		return rejectWithValue(err.response?.data || { error: 'Network error' })
	}
})

export const deleteItem = createAsyncThunk<
	string,
	string,
	{ rejectValue: { error: string } }
>('items/deleteItem', async (id, { rejectWithValue }) => {
	try {
		await axios.delete(`${API_URL}/${id}`)
		return id
	} catch (err: any) {
		return rejectWithValue(err.response?.data || { error: 'Network error' })
	}
})
