import React, { createContext , useState, useEffect} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const fetchUser = async() =>{
            const requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'tanks' + token,
                  },
            };
        

        const response = await fetch('http://127.0.0.1:8000/auth/register',requestOptions)
        if(!response.ok){
            setToken(null);
        }
        localStorage.setItem('token', token);
    };
        fetchUser();
    },[token]);
    return(
        <UserContext value = {[token, setToken]}>
            {props.children}
        </UserContext>
    )
};