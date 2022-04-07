import { configureStore } from '@reduxjs/toolkit'
import {itemsReducer} from './itemsSlice';
import {sectionsReducer} from './sectionsSlice';

const store = configureStore({
  reducer: {
      items: itemsReducer,
      sections: sectionsReducer
  },
})

export default store;