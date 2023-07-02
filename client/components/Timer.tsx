import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import timerReducer from '../reducers/timer'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  //const [isRunning, setIsRunning] = useState(true)

  const toggleTimer = useAppSelector((state) => state.timer) as boolean
  //const [isRunning, setRunning] = useState(false)

  useEffect(() => {
    if (toggleTimer) {
      console.log('true')
      runTimer()
    } else if (!toggleTimer) {
      console.log('false')
      stopTimer()
    }
  }, [toggleTimer])

  ///in welcome and complete I call toggleTimer with a true/false parameter
  //that much is working

  // useEffect(() => {
  //   let intervalId: any
  //   if (toggleTimer) {
  //     intervalId = setInterval(() => setTime(time + 1), 1000)
  //     console.log('why')
  //   } else if (!toggleTimer) {
  //     console.log('stop')
  //     //else if (toggleTimer === false) {
  //     //console.log('stop')
  //     //setTime(0)
  //     clearInterval(intervalId)
  //     setTime(0)
  //   }
  // }, [toggleTimer, time])

  function runTimer() {
    const newIntervalId = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    setIntervalId(newIntervalId)
  }

  function stopTimer() {
    console.log('stop')
    clearInterval(intervalId)
  }

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time % 3600) / 60)
  // const milliseconds = time % 100

  return (
    <p className="stopwatch-time">
      Timer:
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
      {/* {milliseconds.toString().padStart(2, '0')} */}
      {/* {time} */}
    </p>
  )
}
