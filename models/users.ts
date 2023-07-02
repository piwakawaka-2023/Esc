export interface User {
  id: number
  username: string
  currentLevelId: number
  time?: number
  complete: boolean
  activePlayer: boolean
}

export interface UserTime {
  id: number
  time: number
}
