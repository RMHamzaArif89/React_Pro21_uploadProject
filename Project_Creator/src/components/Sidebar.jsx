import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import './css/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>Your Projects</h1>
        <button className="addProject">
            Add Projects <MdAssignmentAdd/>
        </button>
      
    </div>
  )
}

export default Sidebar
