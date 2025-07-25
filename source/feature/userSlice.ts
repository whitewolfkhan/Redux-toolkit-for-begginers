import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/api";


//create interface
interface User {
    id: string;
    name: string;
    email: string;
    password: string; 
}

//store
interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed'; // these are the states for our API calls
    error: string | null;
}

const initialState : UsersState = {
    users: [],
    status: 'idle',
    error: null,
}

export const getUsers = createAsyncThunk('users/getUsers' , async () => { // add a function which return our api call
    return await fetchUsers();  //this is the asynchronus part
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, //we dont use any reducer, cause it is used for sysncronised operation, but here we need api and get the data,then we need to set the state
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUsers.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message || "An error occured";  //default fallback
        })


    }
})

export default usersSlice.reducer