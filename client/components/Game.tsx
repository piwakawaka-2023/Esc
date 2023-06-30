import { Outlet } from 'react-router-dom'
export default function Game() {
  return (
    <>
      <h1>...do you want to play a game?</h1>
      <Outlet />
    </>
  )
}
