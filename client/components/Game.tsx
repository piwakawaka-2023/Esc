import { Outlet } from 'react-router-dom'
import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Game() {
  // const user = useAppSelector((state) => state.user) as User
  const user = { username: 'Gaby', id: 0 }
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => setTime(time + 1), 10)
      return () => clearInterval(intervalId)
    }
  }, [isRunning, time])

  const seconds = Math.floor((time % 6000) / 100)
  const milliseconds = time % 100

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setTime(0)
  }

  return (
    <>
      <p className="stopwatch-time">
        Timer:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </p>
      <h1>...do you want to play a game?</h1>
      <Outlet />
    </>
  )
}
