import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Blank from './components/blank'
import Projects from './components/projects'

import './App.css'

function App() {
  let[con,setCon]=useState(false)

  return (
  <>
<div className="container">
<Sidebar/>
  {
   con?<Blank/>:<Projects/>
  }
</div>
  </>
  )
}

export default App
