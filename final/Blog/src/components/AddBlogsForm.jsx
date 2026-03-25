import React from 'react'
import {useRef} from "react"

const AddBlogsForm = () => {

   const titleRef=useRef(null)
   const urlRef=useRef(null)
   const desRef=useRef(null)

    const handelclick=(e)=>{
        e.preventDefault();

        const title=titleRef.current.value;
        const url=urlRef.current.value;
        const description=desRef.current.value;
     console.log(title,url,description)
    }
  return (
    <div>
        <label>Title:</label>
         <input type="text" ref={titleRef} /><br></br>
         <label>Url:</label>
         <input type="link" ref={urlRef}></input><br></br>
         <label>Descripton:</label>
         <input type="text" ref={desRef}></input><br></br>
        
         <button onClick={(e)=>handelclick(e)}>Submit</button><br></br>
        
    </div>
  )
}

export default AddBlogsForm;
