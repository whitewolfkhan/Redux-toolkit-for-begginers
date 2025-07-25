import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
import { createNewPost, getPosts } from "../../services/api";


export interface Post{
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    isOptimistic: boolean;
    tempId: string;
    isDeleting?: boolean;
}

//create asynchtonus thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(_,{rejectWithValue})=>{
    try {
        const response = await getPosts();
        return response.data;
    } catch (error) {
        return rejectWithValue(error || "an error occurred while fetching posts");
    }
});

//create post thunk
export const createPosts = createAsyncThunk("posts/createPosts", async(post: {title: string, content: string, author: string, tempId: string},{rejectWithValue})=>{
    try {
        const response = await createNewPost(post);
        return response.{data: response.data, tempId: post.tempId};
    } catch (error) {
        return rejectWithValue(error || "an error occurred while creating posts");
    }
});

//delete post thunk
export const deletePost = createAsyncThunk("posts/deletePosts", async(id: string,{rejectWithValue})=>{
    try {
        await deletePost(id);
        return id;
    } catch (error) {
        return rejectWithValue(error || {"an error occurred while deleting posts": id});
    }
});

//interface for initial state
interface PostsState{
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    currentRequestId: string | null;
    
}


//initial state application
const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null,
    currentRequestId: null
}

//create Slice for application
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{   //create a post for our application
        addNewOptimisticPost: (state, action: PayloadAction<Omit<Post, 'id' | 'createAt' | 'updatedAt' > & {tempId: string}>) => {
            const newPost = {
                ...action.payload,
                id: action.payload.tempId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                inOptimistic: true,
                tempId: action.payload.tempId,
            }
            console.log("äddingOptimisticPost", newPost);
            state.posts.unshift(newPost);
            
        },
        resetPostState:(state) => {
            state.status = "idle";
            state.error = null;
            state.currentRequestId = null;
        }
    }

})
