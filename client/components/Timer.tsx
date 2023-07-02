import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/user'

export default function Timer() {
  const dispatch = useAppDispatch()
  const [time, setTime] = useState(0)
  //const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    console.log('dispatch')
    dispatch(actions.triggerTimerThunk())
  }, [dispatch])

  const user = useAppSelector((state) => state.user) as User

  useEffect(() => {
    let intervalId
    if (isRunning && !user.complete) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    } else if (user.complete) {
      console.log('stop')
      const endTime = time
      setTime(0)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, time])

  const seconds = Math.floor((time % 6000) / 100)
  const milliseconds = time % 100

  return (
    <p className="stopwatch-time">
      Timer:
      {seconds.toString().padStart(2, '0')}:
      {milliseconds.toString().padStart(2, '0')}
    </p>
  )
}
