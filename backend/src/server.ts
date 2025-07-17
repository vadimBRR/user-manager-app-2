import dotenv from 'dotenv'
import express, { json, Request, Response } from 'express'
import cors from 'cors'
import { prisma } from './db/prisma'

dotenv.config()
const app = express()

async function main() {
	app.use(json())
	app.use(
		cors({
			origin: 'http://localhost:5173',
			credentials: true,
		})
	)

	// routes

	// 404 + fall back
  app.all(/(.*)/, (req, res)=> {
    res.status(404).json({message: "Not found!"})
  })

	// error handling
	app.use((err: Error, req: Request, res: Response) => {
		console.error(err.message)

		res.status(500).json({ error: 'Something went wrong!' })
	})

	// start server
	const PORT = process.env.PORT || 4200
	app.listen(PORT, () => {
		console.log(`server is running on ${PORT} port`)
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async err => {
		console.error(err)
		await prisma.$disconnect()
		process.exit(1)
	})
