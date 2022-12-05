import React, { useState } from 'react'
import { useEffect } from 'react'

const Todoss= () => {
    const[text,setText]=useState('')
    const[todo,setTodo]=useState([])
    const[page,setPage]=useState(1)
  
    useEffect(()=>{
      getData()
    },[page])

      const getData=()=>{
fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
        .then((res)=>res.json())
        .then((d)=>{
          console.log(d)
         setTodo(d)
        })
      }
        
      const handleChange=(e)=>{
        setText(e.target.value)
         }

     
  
    const handleClick=()=>{
        const payload={
            title:text,
            status:false
        }
        fetch("http://localhost:8080/todos",{
        method:"POST",
        body: JSON.stringify(payload),
   "headers":{
    "content-type":"application/json"
   }
    }).then((res)=>{
      getData()
      setText("")
    })
        

    }
  return (
    <div>
    <input type="text"  value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>

        {todo.map((e,i)=>(
          <div key={i}>
            <div>{e.title}</div>
 
          </div>
        ))}

        <button  disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default Todoss