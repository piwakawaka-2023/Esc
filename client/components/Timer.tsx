import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

export default function Timer() {
  const [time, setTime] = useState(0)
  //const [isRunning, setIsRunning] = useState(true)

  //I want to get the current payload of toggleTimer here without actually updating it
  //use getState???

  const toggleTimer = useAppSelector((state) => state.timer)
  console.log('toggle timer', toggleTimer)

  //this will be assigned the current payload of toggleTimer action

  ///in other components I could call toggleTimer with a true/false parameter
  ///which changes the payload to true/false

  useEffect(() => {
    let intervalId
    if (toggleTimer) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    } else if (toggleTimer === false) {
      console.log('stop')
      setTime(0)
      clearInterval(intervalId)
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
