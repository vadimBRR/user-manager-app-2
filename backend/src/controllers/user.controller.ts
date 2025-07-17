import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { addUserDto, updateUserDto } from '../dto/user.dto'

const userService = new UserService()

export async function getUsers(req: Request, res: Response) {
	try {
		const data = await userService.getUsers()
		res.status(200).json(data.data)
	} catch (error: any) {
		res.status(400).json({ error: error.message })
	}
}
export async function addUser(req: Request, res: Response) {
	try {
		const parse = addUserDto.safeParse(req.body)
		if (!parse.success) {
			return res.status(400).json({ error: parse.error.flatten().fieldErrors })
		}
		const { name, email } = parse.data
		const data = await userService.addUser(name, email)
		res.status(201).json(data)
	} catch (error: any) {
		res.status(400).json({ error: error.message })
	}
}
export async function updateUser(req: Request, res: Response) {
	try {
		const id = req.params.id
		const parse = updateUserDto.safeParse(req.body)
		if (!parse.success) {
			return res.status(400).json({ error: parse.error.flatten().fieldErrors })
		}
		const { name, email } = parse.data
		const data = await userService.editUser(id, name, email)
		res.status(201).json(data)
	} catch (error: any) {
		res.status(400).json({ error: error.message })
	}
}
export async function deleteUser(req: Request, res: Response) {
	try {
    const id = req.params.id;
    const data = await userService.deleteUser(id)
    res.status(200).json(data);
	} catch (error: any) {
		res.status(400).json({ error: error.message })
	}
}
