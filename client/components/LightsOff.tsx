import Board from './LightsOffBoard'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function LightsOff() {
  const { userId } = useParams()
  //const [nextButton, setnextButton] = useState(true)

  return (
    <>
      <div className="lightoff-background">
        <div className="lightoff-img-overlay">
          <Board />
        </div>
      </div>
      {/* {nextButton && (
        <Link to={`/game/${userId}/scene/1/level/2`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
          >
            Escape
          </button>
        </Link> 
        )} */}
    </>
  )
}

//SOURCE
//https://github.com/luciatruden/lights-out?ref=reactjsexample.com
