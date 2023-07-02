import express from 'express'
import * as db from '../db/questions'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    const question = await db.getSingleQuestion(id)
    res.json(question)
  } catch (e) {
    next(e)
  }
})

export default router
