import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Start from './Start'

function App() {
  return (
    <>
      {/* nav goes here */}
      <Start />
      <Outlet />
    </>
  )
}

export default App
