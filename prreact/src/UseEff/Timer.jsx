import React, { useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
    const [count, setCount]=useState(1)
//     useEffect(()=>{
// // const id= setInterval(()=>{
   
// //     if(count==550){
// //         clearInterval(id)
// //     }
// //     setCount(p=>p+1)
// // },1000)
//     },[])
  return (
    <div>{count}
   
    </div>
  )
}

export default Timer