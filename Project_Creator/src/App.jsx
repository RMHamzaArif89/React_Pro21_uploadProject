import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Blank from './components/blank'

import './App.css'

function App() {

  return (
  <>
<div className="container">
<Sidebar/>
  <Blank/>
</div>
  </>
  )
}

export default App
