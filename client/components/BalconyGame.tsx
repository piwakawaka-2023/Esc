import BalonyStatsScreen from './BalconyStatsScreen'
import purpleVape from '/images/vape-purple.png'
import bus from '/images/bus.png'

export default function BalconyGame() {
  const vapeCatch = 0
  const pipeCatch = 0
  const missed = 0
  return (
    <>
      <BalonyStatsScreen
        vapeCatch={vapeCatch}
        pipeCatch={pipeCatch}
        missed={missed}
      />
      <div className="balony-game-board">
        <div className="vape"> </div>
        <img src={bus} alt="yellow bus" id="bus" />
      </div>
    </>
  )
}
