import React from 'react'
import { useState } from 'react'

const OnMouseMove = () => {
    const[mouse,setMouse]=useState("")
  return (
    <div onMouseMove={(e)=>{
      
  setMouse(`X: ${e.clientX} Y: ${e.clientY}`)
  

    }}>OnMouseMove
    {mouse}
    </div>
  )
}

export default OnMouseMove