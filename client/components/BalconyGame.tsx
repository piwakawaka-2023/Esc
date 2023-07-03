import { useState } from 'react'
import BalonyStatsScreen from './BalconyStatsScreen'
import bus from '/images/bus.png'
import { Link, useParams } from 'react-router-dom'

export default function BalconyGame() {
  const [nextButton, setnextButton] = useState(true)
  const { userId } = useParams()

  const vapeCatch = 0
  const pipeCatch = 0

  return (
    <>
      <BalonyStatsScreen vapeCatch={vapeCatch} pipeCatch={pipeCatch} />
      <div className="balony-game-board">
        <div className="vape"> </div>
        <div className="pipes"> </div>
        <img src={bus} alt="yellow bus" id="bus" />
      </div>
      {nextButton && (
        <Link to={`/game/${userId}/scene/4`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
          >
            Exit
          </button>
        </Link>
      )}
    </>
  )
}
