import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/user'

export default function Timer() {
  const dispatch = useAppDispatch()
  const [time, setTime] = useState(0)
  //const [isRunning, setIsRunning] = useState(true)

  //I want to get the current payload of toggleTimer here without actually updating it
  //use getState???
  useEffect(() => {
    dispatch(actions.toggleTimer(true))
  }, [dispatch])

  //this will be assigned the current payload of toggleTimer action
  const toggleTimer = true

  ///in other components I could call toggleTimer with a true/false parameter
  ///which changes the payload to true/false

  useEffect(() => {
    let intervalId
    if (toggleTimer) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    } else if (!toggleTimer) {
      clearInterval(intervalId)
      setTime(0)
    }
  }, [toggleTimer, time])

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
