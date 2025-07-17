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
router.put('/users', updateUser)
router.delete('/users', deleteUser)

export const userRouter = router
