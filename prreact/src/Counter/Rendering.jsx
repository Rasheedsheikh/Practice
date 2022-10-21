// COUNTER METHOD 3 WITH CONDITIONAL RENDERING

import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const Change=(value)=>{
        setCount(count+value)

    }
  return (
    <div>
        <h1>{count}</h1>
  {count<10 && (
  <div><button onClick={()=>Change(1)}>Add</button>

    <button onClick={()=>Change(-1)}>Add</button>
    <div> {count %2==0 ? "odd" : "even"} </div>
    </div>
 ) }
    </div>
  )
}

export default Counter