import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import audioUrl from '/sounds/short-music.mp3'
import { useSound } from 'use-sound'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MainNav from './MainNav'

function Start() {
  const [playing, setPlaying] = useState(false)
  const [viewForm, setViewForm] = useState(true)
  const [viewStart, setViewStart] = useState(false)
  const [play, { stop }] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const handleStop = () => {
    console.log('stop')
    if (playing) {
      stop()
      setPlaying(false)
    }
  }

  return (
    <>
      <div>
        <div className="grey-background" onClick={() => handlePlay()}>
          <div className="main-nav-container">
            <MainNav />
          </div>
          <div id="esc-logo-container">
            <div id="esc-logo">
              <ESCLogo />
            </div>
          </div>
          <div className='screen'> 
              {viewForm && (
                <StartGameForm
                  viewForm={viewForm}
                  setViewForm={setViewForm}
                  viewStart={viewStart}
                  setViewStart={setViewStart}
                />
              )}
              {viewStart && (
                <Link to="/welcome">
                  <button className="blue-button">Start</button>
                </Link>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
