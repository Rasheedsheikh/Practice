import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

const Ed = () => {
    const[name,setName]=useState("")
    const[numb,setNumb]=useState("")
    const[mail,setMail]=useState("")
    const[id,setId]=useState(0)

const navigate=useNavigate()
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setNumb(localStorage.getItem("numb"))
        setMail(localStorage.getItem("mail"))
    },[])


    const handleEdit=(e)=>{
        e.preventDefault()
     
        axios.put(`http://localhost:8080/data/${id}`,{
            id:id,
          name : name,
           numb: numb,
          mail:  mail,
         
        })
        .then(()=>{
            navigate("/read")
        })
    }

  return (
    <div>
       {/* <input type="text"  value={id} placeholder='enter id' onChange={(e)=>{setId(e.target.value)}} /> */}
      <form>
         <input type="text"  value={name} placeholder='enter Name' onChange={(e)=>{setName(e.target.value)}} />
        <input type="number"  value={numb} placeholder='enter Numb' onChange={(e)=>{setNumb(e.target.value)}} />
        <input type="text"  value={mail} placeholder='enter Mail' onChange={(e)=>{setMail(e.target.value)}} />
    <button type="submit" onClick={handleEdit}>edit</button>
    </form>
    </div>
  )
}

export default Ed