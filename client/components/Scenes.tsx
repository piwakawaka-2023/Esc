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
      <div className="grey-background">
        <div className="screen">
          <div className="slack-card">
            <div className="slack-sidecard">
              <img src={logo} className="logo" alt="slack-icon"></img>
              <div className="slack-text">
                <strong>#2023_Piwakawaka</strong>
                <br></br>
                <strong>#code-help-desk</strong>
                <br></br>
                <br></br>
                <strong> ⬇ Direct Messag..</strong>
                <br></br>
                📨
              </div>
            </div>
            <div className="slack-messagecard">
              <p>{curScene?.text}</p>
            </div>
            <div className="scene-card"></div>
          </div>

          <Link to={`level/${curScene?.levelId}`}>
            <button className="blue-button">Next</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default getScenes
