import { useState } from 'react'
import './App.css'
import Contect from './component/Contect'
import Footer from './component/Footer'
import Project from './component/Project'
import Profile from './component/Profile'
import Navbar from './component/Navbar'
import About from './component/About'
function App() {
  

  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>
      <Contect/>
      <Footer/>

    </>
  )
}

export default App
