import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <>
      <div className="background-style">
        <div id="esc-logo-container">
          <div id="esc-logo">
            <ESCLogo />
          </div>
        </div>
        <div id="start-form-container">
          <div id="start-form">
            <StartGameForm />
          </div>
        </div>
        <Link to="/game">
          <button>Start</button>
        </Link>
      </div>
    </>
  )
}

export default Start
