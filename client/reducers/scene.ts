import { Scene, SceneAction } from '../../models/scenes'
import { GET_SCENE } from '../actions/scene'
const initialState = [] as Scene[]

export default function sceneReducer(
  state = initialState,
  action: SceneAction
) {
  const { type, payload } = action
  switch (type) {
    case GET_SCENE:
      return payload
    default:
      return state
  }
}
