import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import audioUrl from '/sounds/short-music.mp3'
import { useSound } from 'use-sound'
import { Link } from 'react-router-dom'
import { useState } from 'react'

 function Start() {
  const [playing, setPlaying] = useState(false)
  const [viewForm, setViewForm] = useState(true)
  const [viewStart, setViewStart] = useState(false)
  const [play] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  return (
    <>
      <div className="background-style" onClick={() => handlePlay()}>
        <div id="esc-logo-container">
          <div id="esc-logo">
            <ESCLogo />
          </div>
        </div>
        <div id="start-form-container" style={{ textAlign: 'center' }}>
          <div id="start-form">
            {viewForm && (
              <StartGameForm
                viewForm={viewForm}
                setViewForm={setViewForm}
                viewStart={viewStart}
                setViewStart={setViewStart}
              />
            )}
            {viewStart && (
              <Link to="/game">
                <button className="start-button">Start</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
