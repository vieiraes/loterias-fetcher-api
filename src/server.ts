require('dotenv').config()
import express from 'express'
import { LotteryController } from './controllers'


const app = express()
const router = express.Router()
app.use(router)
app.use(express.json())// para aceitar resposes em JSON


function bootstrap() {
    const server = app.listen(process.env.PORT)
    if (server) {
        console.log(`Server started at ${process.env.PORT} 🚀`)
    }
    if (!server) {
        console.log(`Server error 🔻`)
    }
}

app.use('/lottery', LotteryController)

bootstrap()

