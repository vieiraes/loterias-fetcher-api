import { Request, Response } from 'express'
import express from 'express'
import { mountUrl } from '../fetch'
import axios from 'axios'
require('dotenv').config()


const router = express.Router()

router.post('/capture', (req: Request, res: Response) => {

    try {
        const { lottery, concurso }: { lottery: string, concurso: string } = req.body
        async function run() {
            const url: string = `https://apiloterias.com.br/app/resultado?loteria=${lottery}&token=${process.env.TOKEN}&concurso=${concurso}`
            let dezenas: string
            try {
                const res = await axios.get(url).then(res => {
                    dezenas = res.data.dezenas.toString()
                    return dezenas
                })
                return res
            } catch (error) {
                console.error('Erro:', error)
            }

        }


        run().then((dezenas) => {
            const objeto = {
                data: {
                    "lottery": lottery,
                    "concurso": concurso,
                    "dezenas": dezenas
                }
            }
            res.status(201).send(objeto)
        })
    } catch (error) {
        res.status(500).json({
            message: { error: error }
        })
    }
})

export { router }