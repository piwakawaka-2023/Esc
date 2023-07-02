import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <>
      <div id="main-nav-bar">
        <div id="btn-container">
          <Link to="/leaderboard" id="nav-link">
            Leaderboard
          </Link>
          <Link to="/leaderboard" id="nav-link">
            About
          </Link>
        </div>
      </div>
    </>
  )
}

export default MainNav
