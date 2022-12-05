import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from "react-router-dom"
import Div from './Div'
const Read = () => {
    const[data,setData]= useState([])
    const[vil,setvil]=useState("")
    const[show,setShow]=useState(false)

    useEffect(()=>{
       getData()
    },[])
const getData=()=>{
    axios.get("http://localhost:8080/data")
     
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}
 const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/data/${id}`)
    .then(()=>{
        getData()
    })
 }



 const SettoLocalStorage=(id,url,fname,sname)=>{
 
    localStorage.setItem("id",id)
    localStorage.setItem("url",url)
    localStorage.setItem("fname",fname)
    localStorage.setItem("sname",sname)
  
 }



  return (
    <div>
         <input placeholder='search by fname'  />
        <button > search</button>
    <br/>
    <br/>
    <div style={{ height:"auto" ,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px"}}>
       
{data.map((el,i)=>(
    <div key={i}>
   
       {/* <img style={{width:"90%",height:"80%"}} src={el.url}/> */}
    <h2 onClick={()=>setShow(!show)}>
       {el.fname}</h2>
    <h3>{el.sname}</h3>
    <div>{el.id}</div>

    
 <Link to="/edit"><button onClick={()=>{SettoLocalStorage(el.id,el.url,el.fname,el.sname)}}>Edit</button></Link>
    <div><button onClick={()=>{handleDelete(el.id)}}>Delete</button></div>
  
    {show? <Div/> : null}

    </div>

    
))}
    </div>
    </div>
  )
}

export default Read