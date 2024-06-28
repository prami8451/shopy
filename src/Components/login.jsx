import React from "react";
import './login.css'
import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
export default function Loginpage(){
    // const navigate = useNavigate()
     const [username,setUsername]=useState('');
     const [password,setPassword]=useState('');

useEffect(()=>{
    if (localStorage.getItem('cookies')=='secret') {
        window.location.href='/#/items';
        // navigate('/items')
    }
},[] )

     const handlelogin=(event)=>{
        event.preventDefault();
     localStorage.setItem('cookies','secret')
        
        const {VITE_USER , VITE_PASS} = import.meta.env
        // console.log(password)
        if(username==VITE_USER && password==VITE_PASS){
            window.location.href = "/#/items";
        }
        else{
            alert("invalid");
        }
     }
    return(
        <div className="root2">
    
        <p className="page">Login Page</p><br/>
    <div className="login">
        <form id="login" onSubmit={handlelogin}>
       
        <div className="udetail">
        <label ><b>UserName
        </b>
        </label>
        <input type="text" name="Uname" id="Uname" className="put" placeholder="Username" value={username} 
        onChange={(e)=> setUsername(e.target.value)} required/>
        <br/><br/></div>
        <div className="word">
        <label><b>Password
        </b>
        </label>
        <input type="Password" name="Pass" id="Pass" className="put" placeholder="Password" value={password} 
        onChange={(e)=>setPassword(e.target.value)} required/>
        <br/><br/>
        </div>
        <div className="but">
       
   
        <button className="log" type="submit">Login</button></div>
        </form>
        </div>
       </div>
    )
}