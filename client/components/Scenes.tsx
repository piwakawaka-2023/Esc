/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/slack-icon.png'
import pfp from '../../public/images/bossman.png'
import slackbot from '../../public/images/slackbot.png'
import SceneNextButton from './SceneNextButton'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const [text, setText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText('this will be the slackbot auto message')
    }, 3000)
  }, [])

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
              <img src={pfp} className="pfp" alt="icon"></img>
              <p>{curScene?.text}</p>
              {text && (
                <>
                  <img
                    src={slackbot}
                    className="slackbot"
                    alt="slackbot-icon"
                  />
                  <br></br>
                  {text}
                </>
              )}
            </div>
            <div className="scene-card"></div>
          </div>
          <SceneNextButton curScene={curScene} />
        </div>
      </div>
    </>
  )
}

export default getScenes
