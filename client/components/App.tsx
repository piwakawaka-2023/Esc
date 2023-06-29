import { Outlet } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Start from './Start'

import Nav from './Nav'


function App() {
  return (
    <>
      {/* nav goes here */}

      <Start />

      <Nav />

      <Outlet />
    </>
  )
}

export default App
