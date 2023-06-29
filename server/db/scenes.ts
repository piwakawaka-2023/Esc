import { Scene } from '../../models/scenes'
import connection from './connection'

const db = connection

export function getAllScenes(): Promise<Scene[]> {
  return db('scene').select('id', 'level_id', 'text')
  // potential aliasing for level_id
}

export function getScene(id: number): Promise<Scene[]> {
  return db('scene').where({ id }).select('id', 'text')
}
