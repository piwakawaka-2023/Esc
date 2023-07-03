import MainNav from './MainNav'

export default function GameOver() {
  return (
    <>
      <div className="main-nav-container">
        <MainNav />
      </div>
      <div className="grey-background">
        <div className="screen">
          <h2>YOU DIED</h2>
          <h3 className="screen-message typewriter">
            For you, bootcamp will never be over...
          </h3>
          <a href="/">
            <button className="blue-button">PLAY AGAIN</button>
          </a>
        </div>
      </div>
    </>
  )
}
