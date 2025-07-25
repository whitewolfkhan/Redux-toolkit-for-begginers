import { setToSystem, toggleTheme } from "../feature/Theme/themeSlice"
import { store } from "../store"



export const applyTheme = (theme: 'light' | 'dark' | 'system'): void => {
    if(theme === 'system'){
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.classList.toggle('dark-theme', prefersDark)
        document.documentElement.classList.toggle('light-theme', !prefersDark)
    } else {
        document.documentElement.classList.toggle('dark-theme', theme === 'dark')
        document.documentElement.classList.toggle('light-theme', theme === 'light')
    }
}


export const initializeTheme = (): void => {
    const currentState = store.getState()
    applyTheme(currentState.theme.mode)

    //listen for theme changes
    store.subscribe(() => {
        const state = store.getState()
        applyTheme(state.theme.mode)
    })

    if (currentState.theme.mode === 'system'){
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (_e) => {
            applyTheme('system')
        })
    }
}


export const toggleAppTheme = (): void => {
    const currentState = store.getState()
    const currentTheme = currentState.theme.mode

    if(currentTheme === 'system'){
        store.dispatch(setToSystem())
    } else {
        store.dispatch(toggleTheme())
    }
}