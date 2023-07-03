import Cell from './LightsOffCell'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GameOver from './GameOver'
import { useSound } from 'use-sound'
import switchUrl from '/sounds/light-off.wav'

function Board() {
  const size = 3
  const chanceLightStartsOn = 0.25
  const [count, setCount] = useState(0)
  const { userId, id } = useParams()

  const [playSwitch] = useSound(switchUrl, { volume: 0.5 })

  const lightsGrid = Array(size)
    .fill(0)
    .map(() =>
      Array(size)
        .fill(0)
        .map(() => randomLight())
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
    playSwitch()
    return board.grid.every((row) => row.every((cell) => !cell))
  }

  const incCounter = () => {
    setCount(count + 1)
  }

  function youDied() {
    if (count >= 15) {
      console.log('death')
      return <GameOver />
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
      </div>
    )
  })

  return (
    <>
      <div className="screen" id="yellow-screen">
        <p className="lightoff-header">Turn Off the Lights</p>
        <div className="lightoff-attempts">
          <p>Attempts left: {15 - count} </p>
        </div>
      </div>
      <div className="board">
        {hasWon() ? (
          <div className="board-haswon">
            <Link to={`/game/${userId}/scene/${id}/level/2`}>
              <button className="blue-button">Escape</button>
            </Link>
          </div>
        ) : youDied() ? (
          <GameOver />
        ) : (
          gridDisplay
        )}
      </div>
    </>
  )
}

export default Board

/* HINT */
/* Starting with the second row, click on every cell that has a light on in the row above it. This will turn off all the lights in that row. Continue with each successive row until the only remaining lights are in the final row. */
/* In the top row, select the inverse of the bottom row of cells with lights on.
/* FOR EXAMPLE */
/* Bottom row: -*- Top row: *-*, Bottom row: *-- Top row: --* */
/* Repeat */
