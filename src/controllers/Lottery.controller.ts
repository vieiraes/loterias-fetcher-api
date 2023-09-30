import { Request, Response } from 'express'
import express from 'express'


const router = express.Router()

router.post('/capture', (req: Request, res: Response) => {

    try {
        const { lottery, initialCount, endCount }: { lottery: string, initialCount: number, endCount: number } = req.body

        !initialCount ? res.status(400).send({ message: 'falta initialCount' }) : undefined

        const objeto = {
            data: {
                "lottery": lottery,
                "initialCount": initialCount,
                "endCount": endCount
            }
        }
        res.status(201).send(objeto)
    } catch (error) {
        res.status(500).json({
            message: { error: error }
        })
    }
})

export { router }