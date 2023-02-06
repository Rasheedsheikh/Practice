import React,  { useEffect,useState } from "react"
import axios from "axios"
const Fetch=()=>{

  const [data, setdata]= useState([])


  
//   const show= async()=>{
//     try{
//       let res= await fetch("https://jsonplaceholder.typicode.com/todos")
//       let data= await res.json()
//       console.log(data)
//       setdata(data)
//     }
//     catch(err){
//  console.log(err)
//     }
//   }

 

useEffect(()=>{
 
  axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      setdata(res.data)
    
     })
   .catch((err)=>{
   console.log(err);
   })

//    Show()
  },[])


  return(
    <div>
  {data.map((el)=>(
    <div>{el.title}</div>
  )
  )}
   
   
    </div>
  )

}

export default Fetch;