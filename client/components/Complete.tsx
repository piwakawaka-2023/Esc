//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk } from '../actions/user'
import { useParams } from 'react-router-dom'

export default function Complete() {
  const id = useParams()
  const dispatch = useAppDispatch()
  console.log('component', id)
  useEffect(() => {
    dispatch(finishGameThunk(Number(id)))
  }, [])

  return (
    <>
      <div className="complete-message">
        <h1>CONGRATS YOU'RE OUT</h1>
      </div>
    </>
  )
}
