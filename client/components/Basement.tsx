import { Link, useParams } from 'react-router-dom'
import slackUrl from '/sounds/knock-brush.mp3'
import JsCarnival from '/sounds/jscarnivalsound.wav'
import correct from '/sounds/correct-buzzer.mp3'
import { useSound } from 'use-sound'
import keycard from '/images/keycard.png'
import mole from '/images/mole.png'
import unicorn from '/images/unicorn.png'
import head from '/images/head.png'
import body from '/images/body.png'
import { useEffect, useState } from 'react'
import Hintss from './GetAHint'

export default function Basement() {
  // Sound
  const { userId } = useParams()
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const [monster] = useSound(JsCarnival, { volume: 0.9 })

  const [key] = useSound(correct, { volume: 0.3 })

  const handlePlayFx = () => {
    play()
  }

  useEffect(() => {
    // Run JavaScript script on this comp
    const script = document.createElement('script')
    script.src = '/scripts/flashlight.js'
    script.async = true
    document.body.appendChild(script)

    // Attach CSS to this comp
    const link = document.createElement('link')
    link.href = '/styles/basement.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    // Clean upon component unmount
    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  // Random Swipecard/JS Carnival Position

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const maxWidth = window.innerWidth - 200
    const maxHeight = window.innerHeight - 200

    const randomX = Math.floor(Math.random() * maxWidth)
    const randomY = Math.floor(Math.random() * maxHeight)

    setPosition({ x: randomX, y: randomY })
  }, [])


  // Show Next button after swipecard clicked

  const [nextButton, setnextButton] = useState(false)


  const handleClick = () => {
    setnextButton(true)
    key()
  }
  // Monster handling
  const [counter, setCounter] = useState(0)

  const handleMouseEnter = () => {
    monster()
    setCounter((prevCounter) => prevCounter + 1)
    if (counter === 6) {
      console.log('dead screen or jumpscare')
    }
  }
  return (
    <>
      <div>
        <img
          src={keycard}
          alt="swipecard"
          className="swipecard"
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        />

        <img
          src={head}
          className="head"
          alt="js-head"
          onMouseEnter={handleMouseEnter}
        />
        <img
          src={body}
          className="body"
          alt="js-body"
          onMouseEnter={handleMouseEnter}
        />
        <img
          src={unicorn}
          className="unicorn"
          alt="js-unicorn"
          onMouseEnter={handleMouseEnter}
        />
        <img
          src={mole}
          className="mole"
          alt="js-mole"
          onMouseEnter={handleMouseEnter}
        />


        {nextButton && (
          <Link to={`/game/${userId}/scene/3`}>
            <button
              style={{ position: 'fixed', bottom: '0' }}
              className="blue-button"
              onClick={() => handlePlayFx()}
            >
              Exit
            </button>
          </Link>
        )}
      </div>

      <Hintss level_id={2} />
      <div>
        <p>Hint</p>
        <p>Look for the swipecard.</p>
      </div>

    </>
  )
}
