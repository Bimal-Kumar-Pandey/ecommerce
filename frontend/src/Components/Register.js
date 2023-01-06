import React, { useState } from 'react'
import axios from "axios";
const Register = () => {
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")

   const  handleonsubmit = async() =>{
    let result  = await fetch(`http://localhost:5000/register` , {
        method : "post",
        body : JSON.stringify( {name , email , password}),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    result = await result.json();
    console.log(result);
   

   }
  return (
    <div>
      <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} ></input><br /><br />
      <input type={"email"} value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} ></input><br /><br />
      <input type={"password"} value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} ></input><br /><br />
      <button onClick={handleonsubmit} >Register</button>
    </div>
  )
}

export default Register
