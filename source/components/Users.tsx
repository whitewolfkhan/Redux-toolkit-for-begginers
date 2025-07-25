import { useEffect } from "react";
import { selectCount } from "../feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getUsers } from "../feature/users/userSlice";


const Users = () => {
    const dispatch = useAppDispatch(selectCount);

    const {error, status, users} = useAppSelector(state => state.users);

    useEffect (() => {
        if(status === 'idle'){
            dispatch(getUsers());
        }
    }, [dispatch, status]);
    if(status === "loading"){
        return <div>Loading...</div>;
    }

    if (status === "failed"){
        return(
            <div>
                {error}
                <button onClick={() => dispatch(getUsers())}>Retry</button>
            </div>
        )
    }

  return (
    <div>
        <h1>Users</h1>
        {users.map((user) => (
            <div key ={user.id}>
                <p>
                    {user.name}
                    <br />
                    {user.email}
                </p> 
            </div>
        ))}
    </div>
  );
  
};

export default Users