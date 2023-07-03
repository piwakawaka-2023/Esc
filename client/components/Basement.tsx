import { Link, useParams } from 'react-router-dom'
import slackUrl from '/sounds/wow.mp3'
import { useSound } from 'use-sound'
import basement from '/images/basement.png'
import keycard from '/images/keycard.png'
import body from '/images/body.png'
import head from '/images/head.png'
import mole from '/images/mole.png'
import unicorn from '/images/unicorn.png'
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

    // Random Swipecard/JS Carnival Position 

  
    const images = [
      { id: 1, src: unicorn, alt: 'JS-carnival-unicorn', keycard: false },
      { id: 2, src: unicorn, alt: 'JS-carnival-unicorn', keycard: false },
      { id: 3, src: unicorn, alt: 'JS-carnival-unicorn', keycard: false },
      { id: 4, src: mole, alt: 'JS-carnival-mole', keycard: false},
      { id: 5, src: keycard, alt: 'keycard', keycard: true },
    ]

    const getRandomPosition = () => {
      const min = 10
      const max = 600
      const x = Math.floor(Math.random() * (max - min + 1) + min)
      const y = Math.floor(Math.random() * (max - min + 1) + min)
      return { x, y };
    };
  
    const getSpecialPosition = () => {
      const min = 0
      const max = 500
      const x = Math.floor(Math.random() * (max - min + 1) + min)
      const y = Math.floor(Math.random() * (max - min + 1) + min)
      return { x, y }
    }

    const [positions, setPositions] = useState([])

    useEffect(() => {
      const generatedPositions = images.map((image) => {
        if (image.special) {
          return { id: image.id, ...getSpecialPosition() }
        }
        return { id: image.id, ...getRandomPosition() }
      })
      setPositions(generatedPositions)
    }, [])

    // Show Next button after swipecard clicked

    const [nextButton, setnextButton] = useState(false)

    const handleSwipeCardClick = () => {
      setnextButton(true)
    }

    const handleJSClick = () => {
      console.log('Angwey >:-(')
    //   // if clicked, play monster audio
    }



    return (
      <>
      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`image-component ${image.keycard ? 'swipecard' : 'js-carnival'}`}
            style={{
              position: 'absolute',
              left: positions.find((pos) => pos.id === image.id)?.x,
              top: positions.find((pos) => pos.id === image.id)?.y,
            }}
            onClick={image.keycard ? handleSwipeCardClick : () => handleJSClick(image.id)}
          />
        ))}

      {nextButton && 
        <Link to={`/game/${userId}/scene/3`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
            onClick={() => handlePlayFx()}
          >Exit
          </button>
        </Link>
        }
    </div>
    </>
     )
    }