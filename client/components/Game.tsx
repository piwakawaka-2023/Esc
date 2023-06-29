import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'

export default function Game() {
  // const user = useAppSelector((state) => state.user) as User

  const user = { username: 'Gaby', id: 0 }

  return (
    <>
      <p>Hello {user.username}</p>
      <Link to={`./${user.id}/scene/1`}>
        <button>Start Game</button>
      </Link>
    </>
  )
}
