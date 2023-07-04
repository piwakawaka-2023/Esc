import { ChangeEvent, FormEvent, useState } from 'react'
import { SetStateAction, Dispatch } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import useSound from 'use-sound'
import incorrectBuzzerUrl from '/sounds/wrong-buzzer.mp3'
import correctBuzzerUrl from '/sounds/correct-buzzer.mp3'

interface Props {
  codeCracked: boolean
  setCodeCracked: Dispatch<SetStateAction<boolean>>
}

function ElevatorCode(props: Props) {
  const [codeAnswer, setCodeAnswer] = useState('')
  const [playIncorrectBuzzer] = useSound(incorrectBuzzerUrl, { volume: 0.05 })
  const [playCorrectBuzzer] = useSound(correctBuzzerUrl, { volume: 0.2 })
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const pincode = '2421'

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCodeAnswer(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (codeAnswer === pincode) {
      playCorrectBuzzer()
      props.setCodeCracked(true)
    } else {
      if (count === 2) {
        navigate('/gameover')
      } else {
        playIncorrectBuzzer()
        props.setCodeCracked(false)
        setCount(count + 1)
      }
    }
  }

  return (
    <>
      <div className="screen screen-sml">
        <h2>Enter the pincode</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="number"
            min={1000}
            max={9999}
            onChange={handleChange}
            placeholder="✱✱✱✱"
          />
          <button className="blue-button">Guess</button>
        </form>
        <p>Attempts remaining: {3 - count}</p>
      </div>
    </>
  )
}

export default ElevatorCode
