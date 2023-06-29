/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const scene = useAppSelector((state) => state.scene) as Scene[]
  const curScene = scene[0]

  useEffect(() => {
    dispatch(actions.getOneScene(Number(id)))
  }, [dispatch, id])

  return (
    <>
      <div className="scene-card">
        <div className="scene-card-content">
          <p>{curScene?.text}</p>
        </div>
        <Link to="/">Next</Link>
      </div>
    </>
  )
}

export default getScenes
