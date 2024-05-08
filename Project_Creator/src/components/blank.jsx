import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import './css/blank.css'

function Blank() {
  return (
    <div className='blank'>
        <h1>
            You have no projects
        </h1>
        <button className='addProject'>
            Add Projects<IoMdAddCircle/>

        </button>
      
    </div>
  )
}

export default Blank
