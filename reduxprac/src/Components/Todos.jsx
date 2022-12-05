import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/action'

const Todos = () => {
    const[text,setText]=useState("")
    const todos=useSelector(state => state.todos )
    const dispatch=useDispatch()
  return (
    <div>
        <input value={text} type="text"  onChange={(e)=>{setText(e.target.value)}} />
    <button onClick={()=>
    {
        dispatch(addTodo(text))
    }}>add</button>

    {todos.map(e=>(
        <div key={e}>{e.text}</div>
    ))}
    </div>
  )
}

export default Todos