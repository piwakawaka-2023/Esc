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

  const scene = useAppSelector((state) => state.scene) as Scene[]
  const curScene = scene[0]

  useEffect(() => {
    dispatch(actions.getOneScene(Number(id)))
  }, [dispatch, id])

  return (
    <>
      <div className="background-style">
        <div className="scene-card" onClick={() => handlePlay()}>
          <div className="scene-card-content">
            <div className="slack-card-logo"></div>
            <div className="slack-message">
              <p>{curScene?.text}</p>
            </div>
            <Link to={`level/${curScene?.levelId}`}>Next</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default getScenes
