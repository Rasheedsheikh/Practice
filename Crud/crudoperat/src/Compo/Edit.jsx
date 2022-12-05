import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

const Edit = () => {
  const[fname, setFname]= useState("")
  const[url,setUrl]=useState("")
  const[sname, setSname]=useState("")
  const[id,setId]=useState(0)
const navigate=useNavigate()

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setUrl(localStorage.getItem("url"))
 
   setFname(localStorage.getItem("fname"))
   setSname(localStorage.getItem("sname"))
  },[])

  const handleEdit=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8080/data/${id}`,{
      url: url,
    fname:  fname,
     sname:  sname,
    
     
     
  }).then(()=>{
    navigate("/read")
  })
  
}

  
  return (
    <div>
      <div>
            <form >
            <input type="text" value={url} placeholder="url" onChange={(e)=>setUrl(e.target.value)}/>
            <input type="text" value={fname} placeholder="first name" onChange={(e)=>setFname(e.target.value)}/>
            <input type="text" value={sname} placeholder="second name" onChange={(e)=>setSname(e.target.value)}/>
            {/* <input type="checkbox"  value={check} onChange={(e)=>setCheck(!check)}/> */}
            <button type="submit" onClick={handleEdit}>Edit</button>
            </form>
        
        </div>
    </div>
  )
}

export default Edit