// Counter using disptach i.e without using variable 
// Actually setCount function itself is a disptach function

import React, { useState }  from 'react'

const Counter = () => {
    const [count,setCount]= useState(0)

const Change=(value)=>{
    setCount((prev)=>{
       return  prev+value
    })
}

if(count>10){
  return " max limit reached"
}

return (

    <div>{count}
        <button onClick={()=>Change(1)}>Add</button>

    <button onClick={()=>Change(-1)}>Add</button>
    </div>

  )
}

export default Counter