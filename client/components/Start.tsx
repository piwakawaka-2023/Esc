import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'

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
      </div>
    </>
  )
}

export default Start
