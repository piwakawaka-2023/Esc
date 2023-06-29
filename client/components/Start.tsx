import StartGameForm from './StartGameForm'

function Start() {
  return (
    <>
      <h1>this is the start page</h1>
      <div id="esc-logo-container">
        <div id="esc-logo">
          {/* 3JS Logo goes here */}
          <p>3JS ESC LOGO</p>
        </div>
      </div>
      <div id="start-form-container">
        <div id="start-form">
          <StartGameForm />
        </div>
      </div>
    </>
  )
}

export default Start
