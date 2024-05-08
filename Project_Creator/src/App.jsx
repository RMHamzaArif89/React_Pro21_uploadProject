import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Blank from './components/blank'
import Projects from './components/projects'
import ProjectForm from './components/ProjectForm'

import './App.css'

function App() {
  let[state,setState]=useState(false)
  let [formData,setFormData]=useState([])

let setDataFunc=(data)=>{
  setFormData((pre)=>([
    ...pre,
    data
  ]))
}



let Delete=(e)=>{
  
setFormData(()=>(

  
    formData.filter((data)=>(data.name !== e))
  
))
  

}


  return (
  <>
<div className="container">
<Sidebar setState={(v)=>{setState(v)}} formData={formData}/>
{
  state? <ProjectForm state={(e)=>{setState(e)}} formData={(v)=>{setDataFunc(v)}}/> 
  :(formData.length > 0?
   <Projects formData={formData} Delete={(e)=>{Delete(e)}}/> : <Blank  setState={(e)=>{setState(e)}}/>)
}
 
</div>
  </>
  )
}

export default App
