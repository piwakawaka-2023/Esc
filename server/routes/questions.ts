import express from 'express'
import * as db from '../db/questions'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const questions = await db.getQuestions()
    res.json(questions)
  } catch (e) {
    next(e)
  }
})

export default router
