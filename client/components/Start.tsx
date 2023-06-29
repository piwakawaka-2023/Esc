import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import audioUrl from '/sounds/short-music.mp3'
import { useSound } from 'use-sound'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Start() {
  const [playing, setPlaying] = useState(false)
  const [play] = useSound(audioUrl, {
    volume: 0.5,
    loop: true,
  })
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
        <div id="start-form-container">
          <div id="start-form">
            <StartGameForm />
          </div>
        </div>
        <Link to="/game">
          <button>Start</button>
        </Link>
      </div>
    </>
  )
}

export default Start
