import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Blank from './components/blank'
import Projects from './components/projects'
import ProjectForm from './components/ProjectForm'
import Detail from './components/Detail'

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


let [proDetail,setProDetail]=useState('')


  return (
  <>
<div className="container">
<Sidebar setState={(v)=>{setState(v)}} formData={formData} proDetail={(v)=>{setProDetail(v)}}/>
{
  state? <ProjectForm state={(e)=>{setState(e)}} formData={(v)=>{setDataFunc(v)}}/> 
  :(formData.length > 0?
   <Projects formData={formData} Delete={(e)=>{Delete(e)}}/> : <Blank  setState={(e)=>{setState(e)}}/>)

  
}
{
  <Detail proDetail={proDetail}/>
}
 
</div>
  </>
  )
}

export default App
