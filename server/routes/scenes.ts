import express from 'express'
import * as db from '../db/'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const review = await db.getOneReview(id)
    res.json(review)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

export default router