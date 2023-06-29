import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Start() {
  const [viewForm, setViewForm] = useState(true)
  const [viewStart, setViewStart] = useState(false)

  return (
    <>
      <div className="background-style">
        <div id="esc-logo-container">
          <div id="esc-logo">
            <ESCLogo />
          </div>
        </div>
        <div id="start-form-container" style={{ textAlign: 'center' }}>
          <div id="start-form">
            {viewForm && (
              <StartGameForm
                viewForm={viewForm}
                setViewForm={setViewForm}
                viewStart={viewStart}
                setViewStart={setViewStart}
              />
            )}
            {viewStart && (
              <Link to="/game">
                <button className="start-button">Start</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
