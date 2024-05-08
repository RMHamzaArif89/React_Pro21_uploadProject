import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import './css/sidebar.css'

function Sidebar({setState}) {
  return (
    <div className='sidebar'>
        <h1>Your Projects</h1>
        <button className="addProject" onClick={()=>{setState(true)}}>
            Add Projects <MdAssignmentAdd/>
        </button>
      
    </div>
  )
}

export default Sidebar
