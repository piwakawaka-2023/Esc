// Data Models
export interface SceneData {
  id: number
  level_id: number
  text: string
}

export interface Scene extends SceneData {
  id: number
}

// Actions

export type SceneAction =
  | { type: 'SET_SCENE'; payload: Scene[] }
  | { type: 'GET_SCENE'; payload: Scene[] }
