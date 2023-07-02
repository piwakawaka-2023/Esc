import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/questions'
import { Question } from '../../models/questions'

interface Props {
  data: number
}

function ElevatorQuestions(props: Props) {
  const dispatch = useAppDispatch()
  const levelId = props.data

  useEffect(() => {
    dispatch(actions.getSingleQuestionThunk(levelId))
  }, [dispatch, levelId])

  const question = useAppSelector((state) => state.question[0]) as Question

  const checkAnswer = (answer: string | undefined) => {
    if (answer == question.correct) {
      console.log('you were right')
    } else {
      console.log("you're wrong")
    }
  }

  return (
    <div className="screen screen-sml">
      <h2>{question.question}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <button
          onClick={() => checkAnswer(question.answer1)}
          className="blue-button blue-button-lge"
        >
          {question.answer1}
        </button>
        <button
          onClick={() => checkAnswer(question.answer2)}
          className="blue-button blue-button-lge"
        >
          {question.answer2}
        </button>
        <button
          onClick={() => checkAnswer(question.answer3)}
          className="blue-button blue-button-lge"
        >
          {question.answer3}
        </button>
        <button
          onClick={() => checkAnswer(question.answer4)}
          className="blue-button blue-button-lge"
        >
          {question.answer4}
        </button>
      </div>
    </div>
  )
}

export default ElevatorQuestions
