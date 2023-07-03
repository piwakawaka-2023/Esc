import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setUserPlayingTimeThunk } from '../actions/user'
import { useParams } from 'react-router-dom'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const { userId } = useParams()
  const dispatch = useAppDispatch()
  const toggleTimer = useAppSelector((state) => state.timer) as boolean

  useEffect(() => {
    if (toggleTimer) {
      runTimer()
    } else if (!toggleTimer) {
      stopTimer()
      dispatch(setUserPlayingTimeThunk(Number(userId), time))
    }
  }, [toggleTimer])

  function runTimer() {
    const newIntervalId = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    setIntervalId(newIntervalId)
  }

  function stopTimer() {
    clearInterval(intervalId)
  }

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time % 3600) / 60)
  // const milliseconds = time % 100

  return (
    <p id="stopwatch-time" className="blinking">
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
      {/* {milliseconds.toString().padStart(2, '0')} */}
      {/* {time} */}
    </p>
  )
}
