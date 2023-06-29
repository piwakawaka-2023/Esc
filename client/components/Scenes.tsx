/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import slackUrl from '/sounds/wow.mp3'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlay = () => {
    play()
  }

  useEffect(() => {
    dispatch(actions.getScene(Number(id)))
  }, [dispatch, id])

  const [scene] = useAppSelector((state) => state.scene) as Scene[]

  return (
    <>
      <div className="scene-card" onClick={() => handlePlay()}>
        <div className="scene-card-content">
          <p>{scene.text}</p>
        </div>
        <Link to="/">Next</Link>
      </div>
    </>
  )
}

export default getScenes
