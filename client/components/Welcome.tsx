import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'

export default function Welcome() {
  // const user = useAppSelector((state) => state.user) as User

  const user = { username: 'Gaby', id: 0 }

  return (
    <>
      <div className="background-style">
        <div className="complete">
          <div className="complete-message">
            <h1>...hello {user.username}</h1>
            <h1>...do you want to play a game?</h1>
          </div>
          <div className="replay">
            <Link to={`/game/${user.id}/scene/1`}>
              <button className="replay-btn">Start Game</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
