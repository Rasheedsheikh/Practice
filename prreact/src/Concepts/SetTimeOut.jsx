import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SetTimeOut = () => {

    const[loading,setLoading]=useState(true)

useEffect(()=>{
      setTimeout(()=>{
            setLoading(false)
        },5000)
        
    },[])
//  method 1 to return

//   return (
//     <div>
//         { loading? <h1>Practice</h1>: <h1>complete</h1> }
//     </div>
//   )


//   method 2 to return

if(loading)
return(
    <h1>practice</h1>
)

return(
    <h1>Complete</h1>
)



}

export default SetTimeOut