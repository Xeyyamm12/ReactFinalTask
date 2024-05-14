import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from '../Reducer/MoviesReducer'
export const store = configureStore({
  reducer: {
    MovieList: MoviesReducer,
},
})