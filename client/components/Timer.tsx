import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/user'
import { User } from '../../models/users'

export default function Timer() {
  const dispatch = useAppDispatch()
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  //const [isRunning, setIsRunning] = useState(true)

  // useEffect(() => {
  //   console.log('dispatch')
  //   const userData = async () => {
  //     await dispatch(actions.getPlayingUserThunk())
  //   }
  //   userData()
  // }, [dispatch])

  useEffect(() => {
    console.log('dispatch')
    dispatch(actions.getPlayingUserThunk())
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

  //dispatch useeffect only runs when the game component first renders,
  //so far it can not be called again
  //so the timer cannot be stopped until the game component stops
  //and we can't pinpoint when to send up data
  //or stop the timer ourselves

  //ideally dispatch will know when the user complete or active status changes
  //and the useeffect will run then, and the if condition in the second useEffect will change

  // const startAndStop = () => {
  //   setIsRunning(!isRunning)
  // }

  return (
    <p className="stopwatch-time">
      Timer:
      {seconds.toString().padStart(2, '0')}:
      {milliseconds.toString().padStart(2, '0')}
    </p>
  )
}
