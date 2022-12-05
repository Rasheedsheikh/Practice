import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Re = () => {
    const [data,setData]=useState([])

    const getData=()=>{
        axios.get("http://localhost:8080/data")
       
        .then((d)=>{
            console.log(d.data)
            setData(d.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8080/data/${id}`)
        .then(()=>{
            getData()
        })

    }

    const setLocal=(id,name,numb,mail)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name", name)
        localStorage.setItem("numb" ,numb)
        localStorage.setItem("mail",mail)
      

    }
  return (
    <div>
        {data.map((e,id)=>(
            <div key={id}>
               
                <div>{e.name}</div>
                <div>{e.numb}</div>
                <div>{e.mail}</div>
                <div>
                 <Link to="/edit">
                  <button onClick={()=>setLocal(e.id,e.name,e.numb,e.mail)}>Edit</button>
                  </Link>  
                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Re