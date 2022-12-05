import axios from 'axios'
import React, { useState } from 'react'

const Cr = () => {
    const[name,setName]=useState("")
    const[numb,setNumb]=useState("")
    const[mail,setMail]=useState("")

    const handleClick=()=>{
        axios.post("http://localhost:8080/data",{
            name,
            numb,
            mail
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefult()
        setMail("")
        setNumb("")
        setName("")

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter Name' onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='enter Numb' onChange={(e)=>{setNumb(e.target.value)}} />
        <input type="text" placeholder='enter Mail' onChange={(e)=>{setMail(e.target.value)}} />
    <button type="submit" onClick={handleClick}>submit</button>
    </form>
    </div>
  )
}

export default Cr