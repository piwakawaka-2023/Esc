import { Outlet } from 'react-router-dom'
import GameNav from '../components/GameNav'
import Timer from '../components/Timer'

export default function Game() {
  return (
    <>
      <GameNav />
      <Timer />
      <Outlet />
    </>
  )
}
