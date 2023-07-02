import type { ThunkAction } from '../store'
import * as api from '../apis/questions'

import { Question } from '../../models/questions'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SHOW_ERROR = 'SHOW_ERROR'

export type QuestionAction =
  | { type: typeof GET_QUESTIONS; payload: Question[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function showError(errorMessage: string): QuestionAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function setQuestions(question: Question[]): QuestionAction {
  return {
    type: GET_QUESTIONS,
    payload: question,
  }
}

//THUNK ACTIONS

export function getAllQuestionsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const questionArr = await api.getQuestions()
      dispatch(setQuestions(questionArr))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
