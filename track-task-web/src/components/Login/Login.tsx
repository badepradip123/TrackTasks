import React, { FC } from "react";

const Login:React.FC=()=>{
    return(
        <>
        
        <h1>login</h1>
        <form>
            <label>Username</label>
            <input type="text" placeholder="username" id="uid"/>
            <br/>
            <label>Password</label>
            <input type="password" placeholder="password" id="pwd"/>
        </form>
        </>
    )
}
export default Login;