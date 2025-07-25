// import { login } from "../feature/auth/authSlice"
import { isAuthenticated, login, logout } from "../feature/auth/authSlice"
import { selectCount } from "../feature/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"


const AuthTest = () => {
    const dispatch = useAppDispatch(selectCount)
    const isAuthorised = useAppSelector(isAuthenticated)
  return(
   <div>AuthTest
        <button onClick={() => dispatch(login({userId: '1', password: '12345'}))}>Login</button>
        {isAuthorised && <button onClick={() => dispatch(logout())}>Logout</button>}
        {isAuthorised && <div>Authorised</div>}
   </div>
  )
}

export default AuthTest