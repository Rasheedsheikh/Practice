import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
    const[list,setList]=useState([])
    const handleClick=(data)=>{
setList([...list, data])
// ikkda ..list endeuku antey mundu value pokunda kotha vale ravadniki.idhi lekapothe paatha value overwrite ayyi kothadhi maatrame kanipisthdhi ala avakunda idhi
    }
  return (
    <div>
     <TodoInput getData={handleClick} />
     {list.map((e,i)=>(
        <div key={i}><TodoItem title={e}/></div>))
     }
    </div>
  )
}

export default Todo