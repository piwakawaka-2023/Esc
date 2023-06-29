// Data Models
export interface Scene {
  id: number
  level_id: number
  text: string
}

// Actions

export type SceneAction = { type: 'GET_SCENE'; payload: Scene[] }
