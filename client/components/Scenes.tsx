/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import slackUrl from '/sounds/wow.mp3'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const [playing, setPlaying] = useState(false)
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const scene = useAppSelector((state) => state.scene) as Scene[]
  const curScene = scene[0]

  useEffect(() => {
    dispatch(actions.getOneScene(Number(id)))
  }, [dispatch, id])

  return (
    <>
      <div onClick={() => handlePlay()}>
        <div className="scene-card">
          <div className="scene-card-content">
            <p>{curScene?.text}</p>
          </div>
          <Link to={`level/${curScene?.levelId}`}>Next</Link>
        </div>
      </div>
    </>
  )
}

export default getScenes
