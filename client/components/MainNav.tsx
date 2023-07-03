import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <>
      <div id="btn-container">
        <Link to="/leaderboard">
          <button className="blue-button blue-button-sml">Leaderboard</button>
        </Link>
        <Link to="/about">
          <button className="blue-button blue-button-sml">About</button>
        </Link>
      </div>
    </>
  )
}

export default MainNav
