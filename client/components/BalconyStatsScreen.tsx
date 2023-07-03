import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { User } from '../../models/users'
import * as actions from '../actions/user'

interface Props {
  vapeCatch: number
  pipeCatch: number
  missed: number
}

export default function BalonyStatsScreen({
  vapeCatch,
  pipeCatch,
  missed,
}: Props) {
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
          <strong>Vapes:</strong>{' '}
        </p>{' '}
        <strong>Pipes:</strong> {pipeCatch}
        <p></p>
        <p>
          <strong>Missed:</strong>
        </p>
          <p id="missed-score"></p>
      </div>
    </>
  )
}
