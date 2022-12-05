import React, { useState } from 'react'

const TodoInput = () => {
  const[todo,setTodo]=useState([])

  const handleAdd=()=>{


  }
  return (
    <div>
      <input type="text" placeholder='enterText' onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput