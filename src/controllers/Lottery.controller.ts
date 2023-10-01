import { Request, Response } from 'express'
import express from 'express'
import axios from 'axios'
import fs from 'fs'
require('dotenv').config()


enum ELottery {
    megasena = "megasena",
    quina = "quina",
    lotofacil = "lotofacil"
}

const router = express.Router()

router.post('/capture', (req: Request, res: Response) => {
    const { lottery, lotteryDraw }: { lottery: string, lotteryDraw: string } = req.body
    if (!lottery || !lotteryDraw) {
        res.status(400).json({ message: { error: "Preencha todos os campos" } })
        return
    }

    try {
        async function run() {
            const url: string = `https://apiloterias.com.br/app/resultado?loteria=${lottery}&token=${process.env.TOKEN}&concurso=${lotteryDraw}`
            let dezenas: string
            try {
                const res = await axios.get(url).then(res => {
                    dezenas = res.data.dezenas.toString()
                    return dezenas
                })
                return res
            } catch (error) {
                console.error('error:', error)
            }
        }

        run().then((dezenas) => {
            const objeto = {
                "lottery": lottery,
                "lotteryDraw": lotteryDraw,
                "numbers": dezenas
            }
            res.status(201).send(objeto)
        })
    } catch (error) {
        res.status(500).json({
            message: { error: error }
        })
    }
})
//


//TODO: ROTA PARA EXPORTAR UM ARRAY DE RESULTADOS
// router.get('/export', (req: Request, res: Response) => {
//     const { lottery, initialDraw, finalDraw } = req.params

//     if (!lottery || !initialDraw || !finalDraw) {
//         res.status(400).json({ message: { error: "Preencha todos os campos" } })
//         return
//     }

//     try {
//         function createArrayconcurso(): string[] {
//             const result: string[] = []
//             for (let index: number = +initialDraw; index <= +finalDraw; index++) {
//                 result.push(index.toString())
//             }
//             return result
//         }

//         let arrayConcurso: string[] = createArrayconcurso()
//         for (let concurso of arrayConcurso) {
//             try {
//                 function createArrayconcurso(): string[] {
//                     const result: string[] = []
//                     for (let index: number = +initialDraw; index <= +finalDraw; index++) {
//                         result.push(index.toString())
//                     }
//                     return result
//                 }

//                 const arrayConcurso: string[] = createArrayconcurso()


//                 for (let concurso of arrayConcurso) {
//                     const url: string = `https://apiloterias.com.br/app/resultado?loteria=${lottery}&token=${process.env.TOKEN}&concurso=${concurso}`;


//                     try {
//                         async function executaAxios() {
//                             const resultPromises: string[] = []
//                             const response = await axios.get(url)
//                             const dezenas: string = response.data.dezenas.toString()
//                         }
//                     } catch (error) {
//                         console.error('Erro:', error)
//                     }
//                 }

                
//                 function gravaNoArquivo(data: string) {
//                     const filename = 'dados.txt'
//                     try {
//                         fs.writeFileSync(filename, data, 'utf-8')
//                         return true
//                     } catch (error) {
//                         console.log(error)
//                         return false
//                     }
//                 }
//                 const resultado  = gravaNoArquivo()



//                 async function run() {
//                     let dezenas: string
//                     const res = await axios.get(url).then(res => {
//                         dezenas = res.data.dezenas.toString()
//                         return dezenas
//                     })
//                     return res
//                 }

//                 // run().then((arrayMatriz) => {
//                 //     console.log(arrayMatriz);
//                 //     const resultado = gravaNoArquivo(arrayMatriz.join('\n'))
//                 //     if (resultado) {
//                 //         console.log('Dados gravados com sucesso.');
//                 //     } else {
//                 //         console.error('Erro ao gravar os dados.');
//                 //     }
//                 // })
//             } catch (error) {
//                 console.error('Erro:', error);
//             }

//         }


//     } catch (error) {
//         console.log(error)
//     }
// })// END ROUTER



export { router }