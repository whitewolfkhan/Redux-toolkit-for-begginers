import { selectCount } from "../feature/counter/counterSlice"
import { selectTheme, setToSystem, toggleTheme } from "../feature/Theme/themeSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"


const ThemeDemo = () => {
    const dispatch = useAppDispatch(selectCount)
    const theme = useAppSelector(selectTheme)
  return(
    <div>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        <button onClick={() => dispatch(setToSystem())}>set to system</button>
        <p> Current Theme : {theme}</p>
    </div>
  )
}

export default ThemeDemo