import express from 'express'
import * as db from '../db/questions'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    const questions = await db.getSingleQuestion(id)
    res.json(questions)
  } catch (e) {
    next(e)
  }
})

export default router
