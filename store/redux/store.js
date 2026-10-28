// store for redux tool kit 

import {configureStore} from '@reduxjs/toolkit'

import favoritesReducer from './favorites-redux'

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
})