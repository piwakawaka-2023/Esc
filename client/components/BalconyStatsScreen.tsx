import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { User } from '../../models/users'
import * as actions from '../actions/user'

export default function BalonyStatsScreen() {
  const user = useAppSelector((state) => state.user) as User

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getPlayingUserThunk())
  }, [dispatch])

  return (
    <>
      <div className="screen" id="game-stats">
        <p>{user.username}</p>
        <p>
          <strong>Vapes:</strong> 0{' '}
        </p>
        <p>
          <strong>Pipes:</strong> 0{' '}
        </p>
        <p>
          <strong>Damage:</strong> 0{' '}
        </p>
      </div>
    </>
  )
}
