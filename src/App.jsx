import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App