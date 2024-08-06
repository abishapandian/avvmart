import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/Home'element={<Home/>}/>
      <Route path='/Login'element={<Login/>}/>
    </Routes>
   </Router>
    </>
    
  )
}
