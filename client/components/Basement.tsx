import { Link, useParams } from 'react-router-dom'
import slackUrl from '/sounds/knock-brush.mp3'
import { useSound } from 'use-sound'
import keycard from '/images/keycard.png'
import { useEffect, useState } from 'react'

export default function Basement() {
  // Sound
  const { userId } = useParams()
  const [play] = useSound(slackUrl, { volume: 0.5 })

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

  // Random Swipecard Position

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
  }

  return (
    <>
      {/* // style
        //   backgroundImage: `url(${basement})`,
        //   textAlign: 'center',
        //   width: '100%',
        //   height: '100VH',
        //   backgroundSize: 'cover',
        //   margin: '-20px',
        // */}

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
    </>
  )
}
