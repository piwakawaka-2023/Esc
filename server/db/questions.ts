import { Question } from '../../models/questions'
import connection from './connection'

const db = connection

export function getSingleQuestion(id: number) {
  return db('questions').where({ id })
}
