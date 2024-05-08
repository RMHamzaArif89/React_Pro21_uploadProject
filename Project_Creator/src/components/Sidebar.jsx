import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import './css/sidebar.css'

function Sidebar({setState,formData,proDetail}) {
  return (
    <div className='sidebar'>
        <h1>Your Projects</h1>
        <button className="addProject" onClick={()=>{setState(true)}}>
            Add Projects <MdAssignmentAdd/>
        </button>
        <div className="side-heading">
            Your Projects
        </div>
        {
            formData.map((val)=>{
           return(
            <div className="side-projects" onClick={()=>{proDetail(val)}}>
            {val.name}
         </div>
           )
            })
        }
      
    </div>
  )
}

export default Sidebar
