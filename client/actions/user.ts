import type { ThunkAction } from '../store'
import { completeGame } from '../apis/user'

import { User } from '../../models/user'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_USER = 'SET_USER'
export const FINISH_GAME = 'FINISH_GAME'
export const SHOW_ERROR = 'SHOW_ERROR'

export type UserAction =
  | { type: typeof REQUEST_USER; payload: User }
  | { type: typeof RECEIVE_USER; payload: User }
  | { type: typeof SET_USER; payload: User }
  | { type: typeof FINISH_GAME; payload: User }
  | { type: typeof SHOW_ERROR; payload: User }

export function showError(errorMessage: string): UserAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function finishGame(id: number): UserAction {
  return {
    type: FINISH_GAME,
    payload: { id },
  }
}

export function finishGameThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await completeGame(id)
      dispatch(finishGame(id))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
