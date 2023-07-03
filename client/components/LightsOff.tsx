import Board from './LightsOffBoard'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function LightsOff() {
  const { userId } = useParams()
  const [nextButton, setnextButton] = useState(true)
  const [hintsButton, setHintsButton] = useState(false)

  const handleClick = () => {
    setHintsButton(true)
    if (hintsButton === true) return setHintsButton(false)
  }

  return (
    <>
      <div className="App">
        <Board />
      </div>
      {nextButton && (
        <Link to={`/game/${userId}/scene/1/level/2`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
          >
            Exit
          </button>
        </Link>
      )}
      <div>
        <p onClick={handleClick}>Hint</p>
        {hintsButton && (
          <p>
            Starting with the second row, click on every cell that has a light
            on in the row above it. This will turn off all the lights in that
            row. Continue with each successive row until the only remaining
            lights are in the final row. In the top row, select the inverse of
            the bottom row of cells with lights on. FOR EXAMPLE Bottom row: -*-
            Top row: *-*, Bottom row: *-- Top row: --* Repeat
          </p>
        )}
      </div>
    </>
  )
}

//SOURCE
//https://github.com/luciatruden/lights-out?ref=reactjsexample.com
