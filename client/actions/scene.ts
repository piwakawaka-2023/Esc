import * as api from './api/scene'
import { Scene, SceneAction } from '../../models/scenes'
import { ThunkAction } from '../store'

// Consts

export const GET_SCENE = 'GET_SCENE'



// Simple Actions

export function getScene(scene: Scene[]): SceneAction {
  return {
    type: GET_SCENE,
    payload: scene,
  }
}









// Thunk Actions

export function getOneScene(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      const sceneArr = await api.fetchScene(id)
      dispatch(getScene(sceneArr))
    } catch (err) {
      console.error('oh no, get one review error')
    }
  }
}