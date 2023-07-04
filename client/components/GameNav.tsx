import { Link } from 'react-router-dom'
import logo from '/images/static-esc-logo.png'
import Timer from '../components/Timer'

function GameNav() {
  return (
    <>
     
        <Timer />
        <Link to="/">
          <img
            src={logo}
            alt="static grey escape logo"
            className="in-game-logo"
          />
        </Link>
  
    </>
  )
}

export default GameNav

//may have to change logo to be an a href
