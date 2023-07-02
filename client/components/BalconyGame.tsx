import BalonyStatsScreen from './BalconyStatsScreen'
import purpleVape from '/images/vape-purple.png'
import bus from '/images/bus.png'

export default function BalconyGame() {
  return (
    <>
      <BalonyStatsScreen />
      <div className="balony-game-board">
        <img src={purpleVape} alt="purple vape" className="vape" />
        <img src={bus} alt="yellow bus" className="bus" />
      </div>
    </>
  )
}
