import express from 'express'
import * as db from '../db/users'

const router = express.Router()

router.post('/', async (req, res, next) => {
  const user = {
    ...req.body,
    current_level_id: req.body.currentLevelId,
    active_player: req.body.activePlayer,
  }
  delete user.currentLevelId
  delete user.activePlayer
  try {
    const newUser = await db.addUser(user)
    res.json(newUser)
  } catch (e) {
    next(e)
  }
})

export default router
