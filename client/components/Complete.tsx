//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useState } from 'react'
import { useSound } from 'use-sound'
import audioUrl from '/sounds/short-music.mp3'
import MainNav from './MainNav'

export default function Complete() {
  const [playing, setPlaying] = useState(false)
  //audio.loop = true

  const [play, { stop }] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const handleStop = () => {
    if (playing) {
      stop()
      setPlaying(false)
    }
  }

  return (
    <>
      <div className="main-nav-container">
        <MainNav />
      </div>
      <div className="grey-background" onClick={() => handlePlay()}>
        <div className="screen">
          <h2 className="screen-message typewriter">
            ...congratulations on escaping
          </h2>
          <a href="/">
            <button className="blue-button" onClick={() => handleStop()}>
              PLAY AGAIN
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
