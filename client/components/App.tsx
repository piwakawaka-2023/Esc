import { Outlet } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      {/* nav goes here */}
      <Nav />
      <Outlet />
    </>
  )
}

export default App
