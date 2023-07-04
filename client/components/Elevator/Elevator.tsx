import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useSound } from 'use-sound'
import liftDoorUrl from '/sounds/elevator-door.wav'
import slackUrl from '/sounds/knock-brush.mp3'
import ElevatorCode from './ElevatorCode'
import ElevatorLevel from './ElevatorLevel'
import Lift from './Lift'
import Background from './Background'
import FlyingElements from './FlyingElements'

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
          <Background />
          <Lift levelNum={levelNum} lift={lift} />
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
          <FlyingElements />
        </Parallax>
      </div>
    </>
  )
}
