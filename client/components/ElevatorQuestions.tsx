function ElevatorQuestions() {
  return (
    <div className="screen screen-sml">
      <h2>the question is</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <button className="blue-button blue-button-lge">1</button>
        <button className="blue-button blue-button-lge">2</button>
        <button className="blue-button blue-button-lge">3</button>
        <button className="blue-button blue-button-lge">4</button>
      </div>
    </div>
  )
}

export default ElevatorQuestions
