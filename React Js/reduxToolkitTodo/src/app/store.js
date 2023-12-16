import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({      // 1st Step: create configureStore
    reducer: todoReducer
})             