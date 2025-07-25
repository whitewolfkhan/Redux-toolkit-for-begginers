import { decrement, increment, incrementByAmount, reset, selectCount } from "../feature/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"

const Counter = () => {

    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch(selectCount)

  return(
    <div>
        <div>{count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter