// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Create from './Components/Create'


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App