import { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

interface Props {
  checkAnswer: (answer: string | undefined) => void
  answers: string[]
  buttonColour: string
}

export default function ElevatorAnswers({
  buttonColour,
  checkAnswer,
  answers,
}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleAnswerClick = (answer: string) => {
    checkAnswer(answer)
    setSelectedAnswer(answer)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer)}
          id={selectedAnswer === answer ? buttonColour : ''}
          className="blue-button blue-button-lge"
        >
          {answer}
        </button>
      ))}
    </div>
  )
}
