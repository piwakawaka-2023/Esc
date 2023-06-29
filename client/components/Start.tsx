import StartGameForm from './StartGameForm'
import audioUrl from '/sounds/short-music.mp3'
import { useSound } from 'use-sound'

function Start() {
  const [play] = useSound(audioUrl, { volume: 0.5, loop: true })
  const handlePlay = () => {
    play()
  }

  return (
    <>
      <div className="background-style" onClick={() => handlePlay()}>
        <div id="esc-logo-container">
          <div id="esc-logo">
            {/* 3JS Logo goes here */}
            <p>3JS ESC LOGO</p>
          </div>
        </div>
        <div id="start-form-container">
          <div id="start-form">
            <StartGameForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
