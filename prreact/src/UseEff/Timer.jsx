import React, { useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
    const [count, setCount]=useState(10)
    useEffect(()=>{
const id= setInterval(()=>{
   setCount((p)=>{
           if(p===0){
            clearInterval(id)
            return 0;
        }
            return p-1 ;
})
     // unmounting
     return()=>{
      console.log("unmounting")
      clearInterval(id)
              
    }
},1000)
    },[])
  return (
    <div>{count}
   
    </div>
  )
}

export default Timer