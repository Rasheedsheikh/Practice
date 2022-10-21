import React from 'react'
import { useState } from 'react'

const TodoInput = ({getData}) => {
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleClick=()=>{
        getData(text)
    }
  return (
    <div>
        <input type="text" placeholder="enter here" onChange={handleChange}/>
<button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput