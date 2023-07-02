import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/questions'
import { Question } from '../../models/questions'

function ElevatorQuestions() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getAllQuestionsThunk())
  }, [dispatch])

  const questions = useAppSelector((state) => state.question) as Question[]
  console.log(questions)

  return (
    <div className="screen screen-sml">
      <h2>{questions[0].question}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <button className="blue-button blue-button-lge">
          {questions[0].answer1}
        </button>
        <button className="blue-button blue-button-lge">
          {questions[0].answer2}
        </button>
        <button className="blue-button blue-button-lge">
          {questions[0].answer3}
        </button>
        <button className="blue-button blue-button-lge">
          {questions[0].answer4}
        </button>
      </div>
    </div>
  )
}

export default ElevatorQuestions
