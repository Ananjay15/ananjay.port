import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import menuReducer from './slices/menuSlice'
import dataReducer from './slices/dataSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    data: dataReducer,
  },
})
