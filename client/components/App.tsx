import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>

      <header className="header">
        <h1>App Comp</h1>
      </header>
      <Outlet />

    </>
  )
}

export default App
