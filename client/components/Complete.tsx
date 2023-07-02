//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk, toggleTimer } from '../actions/user'
import { useParams, Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import audioUrl from '/sounds/short-music.mp3'

export default function Complete() {
  const [playing, setPlaying] = useState(false)
  const { userId } = useParams()
  //audio.loop = true

  const [play, { stop }] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const handleStop = () => {
    console.log('stop')
    if (playing) {
      stop()
      setPlaying(false)
    }
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(toggleTimer(false))
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  return (
    <>
      <div className="grey-background" onClick={() => handlePlay()}>
        <div className="screen">
          <h2 className="screen-message typewriter">
            ...congratulations on escaping
          </h2>
          <a href="/">
            <button className="blue-button" onClick={() => handleStop()}>
              PLAY AGAIN
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
