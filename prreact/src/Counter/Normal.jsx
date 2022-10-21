import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const[counter,setCounter]= useState(0)
 const incre= ()=>{
    setCounter(counter+1)
 }
 const  dec=(()=>{
    if(counter>0){
    setCounter(counter-1)
    }
 })  
// useEffect(()=>{
//     setCounter(counter+1)
// },[])
 return (
    <div>
        <div>
        <h1>{counter}</h1>
        </div>
    <button onClick={incre}>Incre</button>
    <button onClick={dec}>decre</button>
    </div>
  )
}

export default Counter