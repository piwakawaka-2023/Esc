import { Outlet } from 'react-router-dom'
import Timer from './Timer'
import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'

export default function Game() {
  // const user = useAppSelector((state) => state.user) as User
  const user = { username: 'Gaby', id: 0 }

  return (
    <>
      <h1>...do you want to play a game?</h1>
      <Timer />
      <Outlet />
    </>
  )
}
