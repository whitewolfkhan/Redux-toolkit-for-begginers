import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type RootState } from '../../store'


interface CounterState{
    value: number
}

//define initial state
const initialState: CounterState = {
    value : 0
}

//create slice
//create slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
         increment: (state) => {
            state.value += 1
         },
         decrement: (state) => {
            state.value -= 1
         },
         //payload is the amount to increment by
         incrementByAmount: (state,action: PayloadAction<number>) => {
            state.value += action.payload
         },
         reset: (state) => {
            state.value = 0
         },
    }
})


//export the actions 
export const {increment, decrement, incrementByAmount, reset } = counterSlice.actions

//selectors
export const selectCount = (state: RootState) => state.counter.value

//export the reducer
export default counterSlice.reducer