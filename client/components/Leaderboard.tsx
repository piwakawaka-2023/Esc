import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { UserHighscore } from '../../models/users'
import { useEffect } from 'react'
import * as userActions from '../actions/user'

export default function Leaderboard() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.getUsersThunk())
  }, [dispatch])

  const players = useAppSelector((state) => state.user) as UserHighscore[]
  //const sortPlayers = players
  //   .map((player) => [player.id, player.username, player.time])
  //   .sort((a, b) =>

  return (
    <>
      <div className="grey-background">
        <div className="screen">
          <h2 className="screen-message typewriter">HIGHSCORES</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.username}</td>
                  <td>{player.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
