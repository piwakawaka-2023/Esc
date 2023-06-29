import { Scene } from '../../models/scenes'
import connection from './connection'

const db = connection

export function getScene(id:number): Promise<Scene[]> {
  return db('scene')
  .where({id})
  .select('id', 
  'text')
}