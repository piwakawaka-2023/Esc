import BalonyStatsScreen from './BalconyStatsScreen'
import bus from '/images/bus.png'
import GetAHint from './GetAHint'

export default function BalconyGame() {
  return (
    <>
      <div>
        <GetAHint level_id={5} />
        <BalonyStatsScreen />
      </div>
      <div className="balony-game-board">
        <div className="vape"> </div>
        <div className="pipes"> </div>
        <img src={bus} alt="yellow bus" id="bus" />
      </div>
    </>
  )
}
