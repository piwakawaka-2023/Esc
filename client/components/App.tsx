import { Outlet } from 'react-router-dom'
import Timer from '../components/Timer'

function App() {
  return (
    <>
      <Timer />
      <Outlet />
    </>
  )
}

export default App
