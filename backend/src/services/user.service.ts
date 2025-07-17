import { prisma } from '../db/prisma'
import { User } from '../generated/prisma'

export class UserService {
	async getUsers(): Promise<{ data: User[] }> {
		const data = await prisma.user.findMany()
		return { data }
	}

	async addUser(name: string, email: string): Promise<User> {
		return await prisma.user.create({ data: { name, email } })
	}

	async editUser(id: string, name?: string, email?: string): Promise<User> {
		return await prisma.user.update({ where: { id }, data: { name, email } })
	}

	async deleteUser(id: string): Promise<void> {
		const user = await prisma.user.findUnique({ where: { id } })
		if (!user) {
			throw new Error('User not found')
		}

		await prisma.user.delete({ where: { id } })
	}
}
