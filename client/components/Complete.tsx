//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk } from '../actions/user'
import { useParams, Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import audioUrl from '/sounds/short-music.mp3'

export default function Complete() {
  const [playing, setPlaying] = useState(false)
  const { userId } = useParams()
  //audio.loop = true

  const [play] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  return (
    <>
      <div className="grey-background" onClick={() => handlePlay()}>
        <div className="screen">
          <h2 className="screen-message">...congratulations on escaping</h2>
          <Link to="/">
            <button className="blue-button">PLAY AGAIN</button>
          </Link>
        </div>
      </div>
    </>
  )
}
