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

router.get('/', async (req, res, next) => {
  try {
    const playingUser = await db.getPlayingUser()
    res.json(playingUser[0])
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

router.patch('/updateTime/:id', async (req, res, next) => {
  const id = +req.params.id //could be user.id ?
  const time = req.body
  try {
    await db.updatePlayingTime(id, time)
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

export default router
