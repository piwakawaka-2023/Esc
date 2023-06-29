//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk } from '../actions/user'
import { useParams, Link } from 'react-router-dom'
import audioUrl from '/sounds/short-music.mp3'

export default function Complete() {
  const { userId } = useParams()
  const audio = new Audio(audioUrl)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  const handleClick = () => {
    audio.play()
    audio.loop = true
  }

  return (
    <>
      <div className="background-style" onClick={() => handleClick()}>
        <div className="complete">
          <div className="complete-message">
            <h1>...congratulations on escaping</h1>
          </div>
          <div className="replay">
            <Link to="/">
              <button className="replay-btn">PLAY AGAIN</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
