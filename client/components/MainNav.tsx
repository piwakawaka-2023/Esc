import { Link } from 'react-router-dom'
import Timer from '../components/Timer'

function MainNav() {
  return (
    <>
      <div id="main-nav-bar">
        <div id="btn-container">
          <Timer />
          <Link to="/leaderboard" id="nav-link">
            Leaderboard
          </Link>
        </div>
      </div>
    </>
  )
}

export default MainNav
