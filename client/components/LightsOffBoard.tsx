import Cell from './LightsOffCell'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Board() {
  const size = 3
  const chanceLightStartsOn = 0.25
  const [count, setCount] = useState(0)
  const { userId, id } = useParams()

  const lightsGrid = Array(size)
    .fill(0)
    .map(
      (row) =>
        (row = Array(size)
          .fill(0)
          .map((cell) => (cell = randomLight())))
    )
  lightsGrid[1][1] = true

  function randomLight() {
    return Math.random() < chanceLightStartsOn
  }

  const [board, setBoard] = useState({ grid: lightsGrid })

  function toggleAllLights(cellIndex: string) {
    const [cellRowIndex, cellColIndex] = cellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    toggleLight(cellIndex)
    toggleLight([numCellRowIndex, numCellColIndex + 1].join(''))
    toggleLight([numCellRowIndex, numCellColIndex - 1].join(''))
    toggleLight([numCellRowIndex + 1, numCellColIndex].join(''))
    toggleLight([numCellRowIndex - 1, numCellColIndex].join(''))
  }

  function toggleLight(cellIndex: string) {
    const stringCellIndex = String(cellIndex)
    const [cellRowIndex, cellColIndex] = stringCellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    setBoard((state) => ({
      ...state,
      grid: state.grid.map((row, rowIndex) =>
        rowIndex === numCellRowIndex
          ? row.map((col, colIndex) =>
              colIndex === numCellColIndex ? !col : col
            )
          : row
      ),
    }))
    incCounter()
  }

  function hasWon() {
    return board.grid.every((row) => row.every((cell) => !cell))
  }

  const incCounter = () => {
    setCount(count + 1)
  }

  function youDied() {
    if (count >= 15) {
      console.log('death')
      return (
        <>
          <h1>You DIED</h1>
          <p>Implement a LINK to new route path</p>
        </>
      )
    }
  }

  const gridDisplay = board.grid.map(function (row, rowIndex) {
    return (
      <div className="Board-row" key={rowIndex}>
        {row.map((col, colIndex) => (
          <Cell
            key={[rowIndex, colIndex].join('')}
            cellIndex={[rowIndex, colIndex].join('')}
            isOn={board.grid[rowIndex][colIndex]}
            toggleLight={toggleAllLights}
          />
        ))}
        {count}
      </div>
    )
  })

  return (
    <div className="Board">
      {hasWon() ? (
        <div className="Board-hasWon">
          <Link to={`/game/${userId}/scene/${id}/level/1`}>
            <button className="blue-button">Exit</button>
          </Link>
        </div>
      ) : youDied() ? (
        <>
          <h1>You DIED</h1>
          <p>Implement a LINK to new route path</p>
        </>
      ) : (
        gridDisplay
      )}
    </div>
  )
}

export default Board
