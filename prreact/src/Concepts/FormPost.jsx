 // import React, { useState } from 'react'

// const FormPost = () => {

//     const [data,setData]=useState({
//         name:"",
//         ownerName:"",
//         address:"",
//         areaCode:"",
//     }
//     )

//     const handleChange=(e)=>{
//         setData(()=>({
//             [e.target.name]: e.target.value,
//         })
//     )
//   return (
//     <div>
//         <form onSubmit="new">
//        <label>name</label>
//           <input type="text" className="name" value={data.name} required  onChange={handleChange} name="name"/>
//           <br />
//           <label>ownerName</label>
//           <input value={data.ownerName} type="text" className="ownerName" required onChange={handleChange} name="ownerName" />
//           <br />
//           <label>address</label>
//           <input value={data.address} type="text" className="address" required onChange={handleChange}  name="address"/>
//           <br />
//           <label>areaCode</label>
//           <input value={data.areaCode} type="text" className="areaCode" required onChange={handleChange} name="areaCode" />
//           <br />
//           </form> 
//     </div>
//   )
// }
// }
// export default FormPost

import React,{useState} from "react"
import axios from "axios"
export const FormPost = () => {
    const [data, setData]=useState({
name:"",
ownerName:"",
address:"",
areaCode:"",
rent:"",
preferredTenant:"",
bachelor:"",
married:"",
image:""

})
const handleChange=(e)=>{
    setData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value

    }))

}
    const handleSubmit=(e)=>{
        

e.preventDefault();
axios.post("http://localhost:8080/houses",{
    name:data.name,
ownerName:data.ownerName,
address:data.address,
areaCode:data.areaCode,
rent:data.rent,
preferredTenant:"",
bachelor:"",
married:data.married,
image:data.image,

}).then((res)=>{
    console.log(res)

})
    }
    return (
      <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input type="text" className="name" value={data.name} required  onChange={handleChange} name="name"/>
          <br />
          <label>ownerName</label>
          <input value={data.ownerName} type="text" className="ownerName" required onChange={handleChange} name="ownerName" />
          <br />
          <label>address</label>
          <input value={data.address} type="text" className="address" required onChange={handleChange}  name="address"/>
          <br />
          <label>areaCode</label>
          <input value={data.areaCode} type="text" className="areaCode" required onChange={handleChange} name="areaCode" />
          <br />
          <label>rent</label>
          <input value={data.rent} type="text" className="rent" required onChange={handleChange} name="rent" />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input checked={data.bachelor} type="checkbox" className="bachelor" onChange={handleChange}  />
          <br />
          <label>married</label>
          <input checked={data.married} type="checkbox" className="married" onChange={handleChange} />
          <br />
          <label>image</label>
          <input value={data.image} type="text" className="image" required onChange={handleChange}  name="image"/>
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  