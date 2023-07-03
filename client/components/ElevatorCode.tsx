import { ChangeEvent, FormEvent, useState } from 'react'
import { SetStateAction, Dispatch } from 'react'

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
      playIncorrectBuzzer()
      props.setCodeCracked(false)
    }
  }

  return (
    <>
      <div className="screen screen-sml">
        <h2>Enter the pincode</h2>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="pincode"></label> */}
          <input
            className="input-field"
            type="number"
            min={1000}
            max={9999}
            onChange={handleChange}
          />
          <button className="blue-button">Guess</button>
        </form>
      </div>
    </>
  )
}

export default ElevatorCode
