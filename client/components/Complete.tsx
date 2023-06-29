//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk } from '../actions/user'
import { useParams, Link } from 'react-router-dom'

export default function Complete() {
  const { userId } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  return (
    <>
      <div className="complete">
        <div className="complete-message">
          <h1>congratulations on escaping...</h1>
        </div>
        <div className="replay">
          <Link to="/">
            <button className="replay-btn">Play Again</button>
          </Link>
        </div>
      </div>
    </>
  )
}
