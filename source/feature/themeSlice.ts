import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from '../../store';



type ThemeState = {
    mode: 'light' | 'dark' | 'system'
}

const initialState: ThemeState = {
    mode: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setToSystem: (state) => {
            state.mode = 'system';
        }
    }

})


export const { toggleTheme, setToSystem } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;

