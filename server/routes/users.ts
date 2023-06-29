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

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.completeGame(id)
    res.sendStatus(204)
  } catch (e) {
    console.log('Update user status: ', e)
    res.sendStatus(500)
  }
})

export default router
