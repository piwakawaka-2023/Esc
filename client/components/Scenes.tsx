/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useState, useEffect } from 'react'
import logo from '/images/slack-icon.png'
import pfp from '/images/bossman.png'
import slackbot from '/images/slackbot.png'
import SceneNextButton from './SceneNextButton'
import slackUrl from '/sounds/wow.mp3'
import { useSound } from 'use-sound'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  // slack notification sound
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlayFx = () => {
    play()
  }

  // setting slackBot text to appear
  const [audioPlay, setAudioPlay] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleClick = () => {
    setShowContent(true)
    if (!audioPlay) {
      setAudioPlay(true)
      handlePlayFx()
    }
  }

  // Finding correct scene by ID

  const scene = useAppSelector((state) => state.scene) as Scene[]
  const curScene = scene[0]

  useEffect(() => {
    dispatch(actions.getOneScene(Number(id)))
  }, [dispatch, id])

  return (
    <>
      <div className="grey-background" onClick={handleClick}>
        <div className="screen" style={{ animation: 'none' }}>
          <div className="slack-card">
            <div className="slack-sidecard">
              <img src={logo} className="logo" alt="slack-icon" />
              <div className="slack-text">
                <strong>#2023_Piwakawaka</strong>
                <br />
                <strong>#code-help-desk</strong>
                <br />
                <br />
                <strong> ⬇ Direct Messag..</strong>
                <br />
                📨
              </div>
            </div>
            <div className="slack-messagecard">
              <img src={pfp} className="pfp" alt="icon" />
              <p>{curScene?.text}</p>
              <br />
              {showContent && (
                <>
                  <img
                    src={slackbot}
                    className="slackbot"
                    alt="slackbot-icon"
                  />
                  <br />
                  <p>{curScene?.slack}</p>
                  <div className="scene-card"></div>
                </>
              )}
            </div>
          </div>
            <SceneNextButton curScene={curScene} />
        </div>
      </div>
    </>
  )
}

export default getScenes
