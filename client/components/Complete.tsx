//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { finishGame } from '../actions/user'

import { finishGameThunk } from '../actions/user'

import { useParams } from 'react-router-dom'

export default function Complete() {

  const { userId } = useParams()

  const dispatch = useAppDispatch()
  const newId = Number(userId)
  useEffect(() => {
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  return (
    <>
      <div className="complete-message">
        <h1>CONGRATS YOU'RE OUT</h1>
      </div>
    </>
  )
}
