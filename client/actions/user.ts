import type { ThunkAction } from '../store'
import * as api from '../apis/user'

import { User } from '../../models/users'

import { application } from 'express'

export const ADD_USER = 'ADD_USER'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_USER = 'SET_USER'
export const FINISH_GAME = 'FINISH_GAME'
export const SHOW_ERROR = 'SHOW_ERROR'

export type UserAction =
  | { type: typeof ADD_USER; payload: User }
  | { type: typeof REQUEST_USER; payload: User }
  | { type: typeof RECEIVE_USER; payload: User }
  | { type: typeof SET_USER; payload: User }
  | { type: typeof FINISH_GAME; payload: number }
  | { type: typeof SHOW_ERROR; payload: string }

export function showError(errorMessage: string): UserAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function finishGame(id: number): UserAction {
  return {
    type: FINISH_GAME,
    payload: id,
  }
}

export function addUser(user: User): UserAction {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export function finishGameThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.completeGame(id)
      dispatch(finishGame(id))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function addUserThunk(user: User): ThunkAction {
  return async (dispatch) => {
    try {
      const newUser = await api.addUser(user)
      dispatch(addUser(newUser))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
