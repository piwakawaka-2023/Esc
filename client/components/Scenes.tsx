/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/slack-icon.png'

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
      <div className="background-style">
        <div className="scene-card-content">
          <div className="slack-card-logo">
            <img src={logo} alt="slack-icon"></img>
          </div>
          <br></br>
          <div className="slack-message">
            <p>{curScene?.text}</p>
          </div>
          <span></span>
          <Link to={`level/${curScene?.levelId}`}>Next</Link>
          <div className="scene-card" onClick={() => handlePlay()}></div>
        </div>
      </div>
    </>
  )
}

export default getScenes
