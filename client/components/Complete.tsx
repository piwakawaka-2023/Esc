//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGame } from '../actions/user'
import { useParams } from 'react-router-dom'

export default function complete() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(finishGame(Number(id)))
  }, [])

  return (
    <>
      <div className="complete-message">
        <h1>CONGRATS YOU'RE OUT</h1>
      </div>
    </>
  )
}
