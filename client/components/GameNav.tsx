import { Link } from 'react-router-dom'
import logo from '/images/static-esc-logo.png'

function GameNav() {
  return (
    
    <Link to="/">
      <img src={logo} alt="static grey escape logo" className="in-game-logo" />
    </Link>
  )
}

export default GameNav
