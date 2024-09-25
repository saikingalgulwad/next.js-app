'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";



function Add() {

  const [title ,setTitle]=useState("");
  const [description ,setdescription]=useState("");
  const [username ,setusername]=useState("");
  const [password ,setpassword]=useState("");
  const router = useRouter();
 const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!title||!description||!username||!password){
    alert("pleace enter some letter");
  }
  try{
    const res =await fetch ("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({title,description,username,password}),
    })
    if(res.ok){
    router.push('/');
  }
  }
  
  catch(error){
    console.log(error);
  }
 }
  return (
    <form onSubmit={handleSubmit} >
   
    <input type="text" name="title" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title} className="input-title"></input><br></br><br></br>
    
    <input type="text" name="descripe" placeholder="Description" onChange={(e)=>setdescription(e.target.value)} value={description} className="input-description"></input><br></br><br></br>
    <input type="text" name="descripe" placeholder="Username" onChange={(e)=>setusername(e.target.value)} value={username} className="input-description"></input><br></br><br></br>
    <input type="text" name="descripe" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} value={password} className="input-description"></input><br></br><br></br>

    <button className="submit" type="submit">Submit</button>
   </form>)
}

export default Add
