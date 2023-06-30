import { Outlet } from 'react-router-dom'
import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import ambienceUrl from '/sounds/ambience.wav'
import { useState } from 'react'
import slackUrl from '/sounds/wow.mp3'

export default function Game() {
  // const user = useAppSelector((state) => state.user) as User
  const user = { username: 'Gaby', id: 0 }

  const [playing, setPlaying] = useState(false)
  const [play] = useSound(slackUrl, { volume: 0.5 })
  const [playAmbience] = useSound(ambienceUrl, { volume: 0.8, loop: true })

  const handlePlay = () => {
    if (!playing) {
      playAmbience()
      setPlaying(true)
    }
  }

  const handlePlayFx = () => {
    play()
  }

  return (
    <>
      <h1>...do you want to play a game?</h1>
      <Outlet />
    </>
  )
}
