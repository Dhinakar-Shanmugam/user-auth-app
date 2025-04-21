import React from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/user/login' element={<Login/>}/>
      <Route path='/user/home' element={<Home/>}/>
      <Route path="/user/home/:id" element={<Home />} />

    </Routes>
  )
}

export default App
