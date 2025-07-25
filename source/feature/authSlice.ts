import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

type LoginPayload= {
    userId: string | null
    password: string
}

type AuthState  = {
    userId: string | null,
    isAuthenticated: boolean,
}


const initialState: AuthState = {
    userId: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.userId = action.payload.userId
            if(action.payload.password === '12345'){
                state.isAuthenticated = true
                state.userId = action.payload.userId
                alert('login succesfully')
            } else {
                state.isAuthenticated = false
                alert('invalid password')
            }
        },

        logout: (state) => {
            state.userId = null
            state.isAuthenticated = false
        }
    }
})


export const {login, logout} = authSlice.actions;

export const userId = (state: RootState) => state.auth.userId;
export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer 
