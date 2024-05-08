import React, { useEffect, useState } from 'react'
import './css/form.css'

function ProjectForm({state,formData}) {
    let[data,setData]=useState({
        name:'',
        description:'',
        date:''
    })

    const funcData=(e)=>{
        setData((pre)=>({
                ...pre,
                [e.target.name]:e.target.value,
            

        }))
    }
let addFunc=()=>{
    
    state(false)
    formData(data)

}
  return (
    <div className='form'>
        <h1>Add the Project Details</h1>
        <label htmlFor="">Project Name</label>
        <input type="text" name="name" value={data.name} id="" onChange={funcData}/>
        <label htmlFor="">Description</label>
        <input type="text" name="description" id="" value={data.description} onChange={funcData}/>
        <label htmlFor="">Date</label>
        <input type="date" name="date" id="" value={data.date} onChange={funcData} />
        <button className='add' onClick={addFunc}>Add Project</button>
      
    </div>
  )
}

export default ProjectForm
