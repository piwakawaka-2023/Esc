import { Scene } from '../../models/scenes'
import connection from './connection'

const db = connection

export function getAllScenes(): Promise<Scene[]> {
  return db('scene').select('id', 'level_id  AS levelId', 'text')
}

export function getScene(id: number): Promise<Scene[]> {
  return db('scene').where({ id }).select('id', 'text')
}
