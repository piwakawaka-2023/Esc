import { useEffect } from 'react'
import { User } from '../../models/users'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import * as actions from '../actions/user'

export default function Welcome() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getPlayingUserThunk())
  }, [dispatch])

  const user = useAppSelector((state) => state.user) as User

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
