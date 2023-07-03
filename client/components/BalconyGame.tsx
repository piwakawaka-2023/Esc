import { useState } from 'react'
import BalonyStatsScreen from './BalconyStatsScreen'
import bus from '/images/bus.png'
import { useParams } from 'react-router-dom'

export default function BalconyGame() {
  return (
    <>
      <BalonyStatsScreen />
      <div className="balony-game-board">
        <div className="vape"> </div>
        <div className="pipes"> </div>
        <img src={bus} alt="yellow bus" id="bus" />
      </div>
    </>
  )
}
