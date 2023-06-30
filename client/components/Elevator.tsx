import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
//IMAGES//
import codeBg from '/images/code-bg.png'
import codeBg2 from '/images/code-bg2.png'
import eye from '/images/eye.png'

import { useSound } from 'use-sound'
import liftBellUrl from '/sounds/bell.wav'
import liftDoorUrl from '/sounds/elevator-door.wav'

export default function Elevator() {
  const [lift, setLift] = useState('/images/lift.jpeg')
  const [viewExit, setViewExit] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [levelNum, setLevelNum] = useState(1)

  const [playing, setPlaying] = useState(false)
  const [playLiftBell] = useSound(liftBellUrl, { volume: 0.1 })
  const [playLiftDoor] = useSound(liftDoorUrl, { volume: 0.2 })

  const ref = useRef()
  const { userId } = useParams()

  const handleClick = () => {
    setLift('/images/liftgif.gif')
    setViewExit(true)
    setViewOpen(false)
    liftDoorFx()
  }

  const incrLevel = () => {
    setLevelNum(levelNum + 1)
    liftBellFx()
  }

  const liftBellFx = () => {
    playLiftBell()
  }

  const liftDoorFx = () => {
    playLiftDoor()
  }

  return (
    <>
      <div className="elevator-shaft">
        <Parallax
          pages={6}
          ref={ref}
          style={{
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage: `url(${codeBg})`,
              backgroundSize: 'fit',
            }}
            factor={5}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            style={{
              backgroundImage: `url(${codeBg2})`,
              backgroundSize: 'cover',
            }}
            factor={5}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={0.6}
            speed={0.5}
            onClick={() => ref.current.scrollTo(1)}
          >
            <div>
              <button onClick={incrLevel} className="start-button">
                Go Down
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.6}
            speed={0.1}
            onClick={() => ref.current.scrollTo(2)}
          >
            <div>
              <button onClick={incrLevel} className="start-button">
                Go Down Again
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.6}
            speed={1}
            onClick={() => ref.current.scrollTo(3)}
          >
            <div>
              <button onClick={incrLevel} className="start-button">
                Annnd Again
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 2.5, end: 2.6 }}
            style={{ textAlign: 'left', width: '10%' }}
          >
            <img
              style={{ width: '100%', textAlign: 'right' }}
              src={eye}
              alt="eye"
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.6}
            speed={1}
            onClick={() => ref.current.scrollTo(5)}
          >
            <div>
              <button onClick={incrLevel} className="start-button">
                One more
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.1, end: 6.9 }}
            style={{ textAlign: 'left', margin: '50px', width: '20%' }}
          >
            <div>
              <p
                style={{
                  textAlign: 'center',
                  paddingTop: '50px',
                }}
              >
                Level {levelNum}
              </p>
            </div>
            <img style={{ width: '100%' }} src={lift} alt="lift" />
          </ParallaxLayer>
          <ParallaxLayer offset={5.2} style={{ textAlign: 'center' }}>
            <div>
              {viewOpen && (
                <button className="start-button" onClick={handleClick}>
                  Open Doors
                </button>
              )}
              {viewExit && (
                <Link to={`/game/${userId}/scene/2`}>
                  <button className="start-button">Exit</button>
                </Link>
              )}
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
