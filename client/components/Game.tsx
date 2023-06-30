import { Outlet } from 'react-router-dom'
import { User } from '../../models/users'
import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import slackUrl from '/sounds/wow.mp3'
import GameNav from '../components/GameNav'

export default function Game() {
  // const user = useAppSelector((state) => state.user) as User
  const user = { username: 'Gaby', id: 0 }

  return (
    <>
      <GameNav />
      <h1>...do you want to play a game?</h1>
      <Outlet />
    </>
  )
}
