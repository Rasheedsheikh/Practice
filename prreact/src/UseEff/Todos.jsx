import React, { useState } from 'react'
import { useEffect } from 'react'

const Todos = () => {
    const[text,setText]= useState("")
  const[todo,setTodo]=useState([])
  const [page,setPage]=useState(1)
  
const handleChange=(e)=>{
   setText(e.target.value)
}

useEffect(()=>{
getData()
},[page])
 const getData=()=>{
   fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
   .then((res)=>res.json())
   .then(d=>{
    console.log(d)
    setTodo(d)
   })
 }


   const handleAdd=()=>{
   const payload={
      title:text,
      status:false
    };

     fetch("http://localhost:8080/todos",
     {
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type":"application/json"

        }
     })
     .then((res)=>{
      getData()
      setText("")
     })
   }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} placeholder="enter here" />
        <button onClick={handleAdd}>ADD</button>

        {todo.map((e)=>(
          <div>{e.title}</div>
        ))}

        <button  disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default Todos