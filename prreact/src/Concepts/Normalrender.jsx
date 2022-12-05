import React, { useState } from "react"

const Normalrender=()=>{

    const [data , setData]=useState([{
        "id": 1,
        "title": "json-server",
        "author": "typicode",
        "status": false,
      },
      {
        "title": "learn mern",
        "status": false,
        "id": 3
      },
      {
        "title": "learn css",
        "status": false,
        "id": 4
      },

    ])


    const handledelete=(el)=>{
        const newdata= data.filter(data=>
           el != data.id)
        setData(newdata)

            let filtered= data.filter((el)=>{
              return el.title.includes("a")
            })
            console.log(filtered)
          }

    
    return(
        <>
        { data?.map((e)=>(
                <div>
                <div> {e.id} </div>
                <div>{e.title}</div>
                <div>{e.status}</div>
                <button onClick={()=>{handledelete(e.id)}}>Delete</button>
                 </div>
            ))
        }
        </>
    )

}

export default Normalrender;
