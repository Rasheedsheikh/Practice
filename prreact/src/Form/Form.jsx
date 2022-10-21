import React, { useState } from 'react'

const Form = () => {
    const[form,setForm]=useState({
        name:"",
        age:"",
        address:"",
    })
    const handleChange=(e)=>{
        const {name, value}=e.target
        setForm({
            ...form,
            [name]:value

        })

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='Enter' onChange={handleChange}  name="name" />
        <input type="text"  placeholder='Enter' onChange={handleChange}  name="age"/>
        <input type="text"  placeholder='Enter' onChange={handleChange}  name="address"/>
        <input type="submit"/>
        </form>

       
    </div>
  )
}

export default Form