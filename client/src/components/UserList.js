import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/ApiServices';
export default function UserList(){

const [users, setUsers] = useState([])
    
useEffect(() => {
    let mount = true;
    getUsers()
    .then(res =>{
        console.log('res from api service', res);
        setUsers(res);
        return() => mount = false;
    });
}, [])

    return (
        <>
        <h3>UserList</h3>
        </>
    )
}