import React from 'react'
import './css/projects.css'
import { MdDelete } from "react-icons/md";

function Projects({formData,Delete}) {
  return (
    <div className='projects'>
        <h1>Your Projects</h1>
       {
        formData.map((val,i)=>{
          return(
        
        <div className="project">
                <div className="name"><span>Project{i+1}: </span>{val.name} </div>
            <div className="description"><span>Details: </span>{val.description}</div>
            <div className="date"><span>Due Date: </span>{val.date}</div>
            <div className="delete" onClick={()=>{Delete(val.name)}}><MdDelete/></div>

        </div>
           
          )
           
          
        })
       }
      
    </div>
  )
}

export default Projects
