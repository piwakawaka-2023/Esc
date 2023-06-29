import { Outlet } from 'react-router-dom'
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
