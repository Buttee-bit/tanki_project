import React from "react";
import Hi_comp from "./hi";


const Home = () =>{

    return (
        <div>
            <h1>This is Home Page</h1>
            <Hi_comp name = {"Props_Name"} age = {4} />
        </div>
    )
}

export default Home;