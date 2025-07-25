import axios from "axios";
import type { Post } from "../feature/posts/postsSlice";


export const fetchUsers = async () => {
    const willFail = Math.random() > 0.5;
    if(willFail){
        throw new Error('Failed to fetch error');
}
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return data;
}

export const getPosts = async () => {
    const response = await axios.get('https://localhost:3000/api/posts');
    const data = await response.data;
    return data;
}

export const createNewPost = async (post: Partial<Post>) => {
    const response = await axios.get('https://localhost:3000/api/posts', post);
    const data = await response.data;
    return data;
}

export const deletePost = async (id: string) => {
    const response = await axios.get('https://localhost:3000/api/posts/${id}');
    const data = await response.data;
    return data;
}