import Recat from "react";
import { useEffect } from "react";

const Interview=()=>{
    const[data,setData]=useState([])
    const[first,setFirst]=useState("")
    const[second,setSecond]=useState("")

    const handleClick=()=>{
        axios.post("",
        first,
        second)
        
      

    }
      
    const handleSubmit=()=>{
        e.preventDefault
    }
   
    return(

        <div>
            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Enter"  onChange={(e)=>setFirst(e.target.value)} />
                <input type="text" placeholder="Enter" onChange={(e)=>setSecond(e.target.value)}  />
          <button onClick={handleClick} type="submit">Submit</button>
            </form>

        </div>
    )
}
export default Interview