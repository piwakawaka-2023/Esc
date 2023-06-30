import { Outlet } from 'react-router-dom'
import GameNav from './GameNav'

function App() {
  return (
    <>
      {/* nav goes here */}

      <GameNav />

      <Outlet />
    </>
  )
}

export default App
