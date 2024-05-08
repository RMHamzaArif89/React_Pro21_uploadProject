import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import './css/blank.css'

function Blank({setState}) {
  return (
    <div className='blank'>
        <h1>
            You have no projects
        </h1>
        <button className='addProject' onClick={()=>{setState(true)}}>
            Add Projects<IoMdAddCircle/>

        </button>
      
    </div>
  )
}

export default Blank
