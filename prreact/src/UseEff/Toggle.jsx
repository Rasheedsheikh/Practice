import React from 'react'
import { useState } from 'react'
import Timer from './Timer';

const Toggle = () => {
    const[show,setShow]=useState(true)
  return (
    <div>
        {show? <Timer/>: null}
        <button onClick={()=>setShow(!show)}>{show ? "hide": "show" }</button>
    </div>
  )
}

export default Toggle