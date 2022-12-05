import React from "react";
import { useState } from "react";
import axios from "axios"
const Create=()=>{
    const[fname, setFname]= useState("")
    const[check, setCheck]= useState(false)
    const[sname, setSname]=useState("")
    const[url,setUrl]=useState("")

const handleClick=()=>{
    axios.post("http://localhost:8080/data",{
        fname,
        sname,
        check,url
    })
    
}

const handleSubmit=(event)=>{
event.preventDefault()
setFname("")
setUrl("")
setSname("")
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={url} placeholder="url" onChange={(e)=>setUrl(e.target.value)}/>
           
           <br/> <input type="text" value={fname} placeholder="first name" onChange={(e)=>setFname(e.target.value)}/>
           
           <br/> <input type="text" value={sname} placeholder="second name" onChange={(e)=>setSname(e.target.value)}/>
          <br/>  <input type="checkbox"  value={check} onChange={(e)=>setCheck(!check)}/>
           <br/> <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        
        </div>
        
    )

}
export default Create