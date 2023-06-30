import { useEffect, useState } from 'react'
import { User } from '../../models/users'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import * as actions from '../actions/user'
import slackUrl from '/sounds/wow.mp3'
import ambienceUrl from '/sounds/ambience.wav'
import { useSound } from 'use-sound'

export default function Welcome() {
  const dispatch = useAppDispatch()

  const [play] = useSound(slackUrl, { volume: 0.5 })

  const [playing, setPlaying] = useState(false)
  const [playAmbience] = useSound(ambienceUrl, { volume: 0.8, loop: true })

  const handlePlayFx = () => {
    play()
  }

  const handlePlay = () => {
    if (!playing) {
      playAmbience()
      setPlaying(true)
    }
  }

  useEffect(() => {
    dispatch(actions.getPlayingUserThunk())
  }, [dispatch])

  const user = useAppSelector((state) => state.user) as User

  return (
    <>
      <div className="background-style" onClick={() => handlePlay()}>
        <div className="complete">
          <div className="complete-message">
            <h1>...hello {user.username}</h1>
            <h1>...do you want to play a game?</h1>
          </div>
          <div className="replay">
            <Link to={`/game/${user.id}/scene/1`}>
              <button className="replay-btn" onClick={() => handlePlayFx()}>
                Start Game
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
