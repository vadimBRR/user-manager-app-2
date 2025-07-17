import { Router } from 'express'
import {
	addUser,
	deleteUser,
	getUsers,
	updateUser,
} from '../controllers/user.controller'

const router = Router()

router.get('/users', getUsers)
router.post('/users', addUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export const userRouter = router
