import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
    const[list,setList]=useState([])
    const handleClick=(data)=>{
setList([...list, data])
// ikkda ..list endeuku antey mundu value pokunda kotha vale ravadniki.idhi lekapothe paatha value overwrite ayyi kothadhi maatrame kanipisthdhi ala avakunda idhi
    }

    const handleDelete=(el)=>{

    }
  return (
    <div>
     <TodoInput getData={handleClick} />
     {list.map((e,i)=>(
      <div>
        <div key={i}><TodoItem title={e}/></div>
        <button onClick={()=>{handleDelete(e.id)}}></button>
        </div>))
     }
    </div>
  )
}

export default Todo