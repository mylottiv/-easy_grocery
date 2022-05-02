import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import dummyNormalizedState from '../dummyNormalizedItems'

const sectionsAdapter = createEntityAdapter();

export const sectionsSlice = createSlice({
    name: 'sections',
    initialState: dummyNormalizedState.sections,
    reducers: {
        addSection: sectionsAdapter.addOne,
        upsertSection: sectionsAdapter.upsertOne
    },
})

export const sectionsSelectors = sectionsAdapter.getSelectors((state) => state.sections)

// Action creators are generated for each case reducer function
export const { addSection, upsertSection } = sectionsSlice.actions

export const sectionsReducer = sectionsSlice.reducer