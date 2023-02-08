import React, { useContext, useState } from "react";

import { UserContext, UserProvider } from "../context/UserContext";

const Register_form = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [username, setUsername] = useState("");
    //const [errorMessage, setErrorMessage] = useState("");
   // const [,setToken] = useContext(UserContext);

    return (
        <div className="column">
            <form action="" className="register">
                <h1 className="title has-text-centered">Register</h1>
                <div className="field">
                    <label  className="label">Email Adress</label>
                    <div className="control">
                        <input type="email" 
                        placeholder="Email Adress" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className = "input"
                        required/>
                    </div>
                </div>
                
                <div className="field">
                    <label  className="label">Username</label>
                    <div className="control">
                        <input type="text" 
                        placeholder="Enter username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className = "input"
                        required/>
                    </div>
                </div>

                <div className="field">
                    <label  className="label">Password</label>
                    <div className="control">
                        <input type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className = "input"
                        required/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Confirm Password</label>
                    <div className="control">
                        <input type="password" 
                        placeholder="Repeat Password" 
                        value={confirmpassword} 
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        className = "input"
                        required/>
                    </div>
                </div>
                
                <button className="button is-primary" type="submit">
                    Register
                </button>
            </form>
        </div>
    )


}

export default Register_form