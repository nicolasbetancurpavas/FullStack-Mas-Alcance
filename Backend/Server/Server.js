import express from 'express'
import cors from 'cors'
import { conectionMongo } from '../DataBase/conection.js'
import { routes } from '../Routes/Routes.js'

export class Server {
    constructor() {
        this.app = express()
        this.activateBody()
        this.conectionBD()
        this.meetRequests()
    }
    activateBody() {
        this.app.use(express.json())
        this.app.use(cors())
    }
    conectionBD = () => conectionMongo()
    meetRequests = () => this.app.use('/', routes)
    wakeServer() {
        const PORT = process.env.PORT || 3000
        this.app.listen(PORT, () => {
            console.log(`Server on ${PORT}`)
        })
    }
}