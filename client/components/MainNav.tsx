import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <>
      <div id="btn-container">
        <a href="/leaderboard">
          <button className="blue-button blue-button-sml">Leaderboard</button>
        </a>
        <Link to="/about">
          <button className="blue-button blue-button-sml">About</button>
        </Link>
      </div>
    </>
  )
}

export default MainNav
