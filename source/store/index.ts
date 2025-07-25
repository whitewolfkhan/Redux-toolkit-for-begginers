import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice' 
import themeReducer from '../feature/Theme/themeSlice' 
import authReducer from '../feature/auth/authSlice' 
import usersReducer from '../feature/users/userSlice' 


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        auth: authReducer,
        users: usersReducer,
    },
})


// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



