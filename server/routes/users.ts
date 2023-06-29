import express from 'express'
import * as db from '../db/users'

const router = express.Router()

router.post('/', async (req, res, next) => {
  const user = { ...req.body }
  try {
    const newUser = await db.addUser(user)
    res.json(newUser)
  } catch (e) {
    next(e)
  }
})

export default router
