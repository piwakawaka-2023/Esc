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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
      { id: 1, src: head, alt: 'JS-carnival-head' },
      { id: 2, src: body, alt: 'JS-carnival-body' },
      { id: 3, src: unicorn, alt: 'JS-carnival-unicorn' },
      { id: 4, src: mole, alt: 'JS-carnival-mole'},
      { id: 5, src: keycard, alt: 'keycard-to-exit', keycard: true}
    ]

    const getRandomPosition = () => {
      const min = 0;
      const max = 500; // Random for JS Carnival elements
      const x = Math.floor(Math.random() * (max - min + 1) + min);
      const y = Math.floor(Math.random() * (max - min + 1) + min);
      return { x, y }
    };
  
  //   const getSpecialPosition = () => {
  //     const min = 600;
  //     const max = 800; // Random for Keycard
  //     const x = Math.floor(Math.random() * (max - min + 1) + min);
  //     const y = Math.floor(Math.random() * (max - min + 1) + min);
  //     return { x, y }
  //   };
  
  //   const [positions, setPositions] = useState([]);
  
  // useEffect(() => {
  //   const generatedPositions = images.map((image) => {
  //     if (image.keycard) {
  //       return { id: image.id, ...getSpecialPosition() };
  //     }
  //     return { id: image.id, ...getRandomPosition() };
  //   });
  //   setPositions(generatedPositions);
  // }, [images]);
    // Show Next button after swipecard clicked

    const [nextButton, setnextButton] = useState(false)

    const handleClick = () => {
      setnextButton(true)
    }

  return (
    <>
     <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{
            position: 'absolute',
            left: positions.find((pos) => pos.id === image.id)?.x,
            top: positions.find((pos) => pos.id === image.id)?.y,
          }}
          onClick={image.keycard ? handleClick : undefined}
      )), [] }
    </div>
      
      {nextButton && 
        <Link to={`/game/${userId}/scene/3`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
            onClick={() => handlePlayFx()}
            >
            Exit
          </button>
        </Link>
        }
      </div>
  </>
)}