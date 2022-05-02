import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import dummyNormalizedState from '../dummyNormalizedItems'

const itemsAdapter = createEntityAdapter();

const itemsSlice = createSlice({
    name: 'items',
    initialState: dummyNormalizedState.items,
    reducers: {
        addItem: itemsAdapter.addOne,
        upsertItem: itemsAdapter.upsertOne
    },
})

export const itemsSelectors = itemsAdapter.getSelectors((state) => state.items)

// Action creators are generated for each case reducer function
export const { addItem, upsertItem } = itemsSlice.actions

export const itemsReducer = itemsSlice.reducer

export default itemsSlice;