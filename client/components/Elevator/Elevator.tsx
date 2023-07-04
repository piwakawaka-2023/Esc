/* eslint-disable @typescript-eslint/no-unused-vars */
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
//IMAGES//
import eye from '/images/eye.png'

import { useSound } from 'use-sound'
import liftDoorUrl from '/sounds/elevator-door.wav'
import slackUrl from '/sounds/knock-brush.mp3'
import ElevatorCode from './ElevatorCode'
import ElevatorLevel from './ElevatorLevel'

export default function Elevator() {
  const [lift, setLift] = useState('/images/lift.jpeg')
  const [viewExit, setViewExit] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [levelNum, setLevelNum] = useState(1)

  const [codeCracked, setCodeCracked] = useState(false)
  const [playLiftDoor] = useSound(liftDoorUrl, { volume: 0.2 })
  const [playSlackUrl] = useSound(slackUrl, { volume: 0.5 })

  const ref = useRef()
  const { userId } = useParams()

  const handleClick = () => {
    setLift('/images/liftgiff.gif')
    setViewExit(true)
    setViewOpen(false)
    liftDoorFx()
  }

  const liftDoorFx = () => {
    playLiftDoor()
  }

  const handlePlayFx = () => {
    playSlackUrl()
  }

  return (
    <>
      <div className="elevator-shaft">
        <Parallax
          pages={6}
          ref={ref}
          style={{
            width: '105%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {/* BACKGROUND LAYERS */}
          <ParallaxLayer
            offset={0}
            speed={1}
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundSize: 'fit',
            // }}
            factor={5}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundSize: 'cover',
            // }}
            factor={5}
          ></ParallaxLayer>

          {/* LIFT LAYERS */}

          <ParallaxLayer
            sticky={{ start: 0.1, end: 6.9 }}
            style={{ textAlign: 'left', margin: '50px', width: '20%' }}
          >
            <div id="lift">
              <div id="lift-number">
                <p style={{ textAlign: 'center' }}> LEVEL {levelNum}</p>
              </div>
            </div>
            <img style={{ width: '100%' }} src={lift} alt="lift" />
          </ParallaxLayer>

          {/* QUESTIONS LAYERS */}

          <ElevatorLevel
            refProp={ref}
            levelNum={levelNum}
            setLevelNum={setLevelNum}
          />

          {/* PIN CODE LAYERS */}
          <ParallaxLayer offset={5.2} style={{ textAlign: 'center' }}>
            <div>
              <ElevatorCode
                codeCracked={codeCracked}
                setCodeCracked={setCodeCracked}
              />
              {viewOpen && codeCracked && (
                <button className="blue-button" onClick={handleClick}>
                  Open Doors
                </button>
              )}
              {viewExit && (
                <Link to={`/game/${userId}/scene/2`}>
                  <button
                    className="blue-button"
                    onClick={() => handlePlayFx()}
                  >
                    Exit
                  </button>
                </Link>
              )}
            </div>
          </ParallaxLayer>

          {/* //FLYING ELEMENTS// */}

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
        </Parallax>
      </div>
    </>
  )
}
