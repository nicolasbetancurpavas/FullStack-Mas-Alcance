import { Server } from "./Server/Server.js"
import * as dotenv from 'dotenv'
dotenv.config()

const servidorApp = new Server()
servidorApp.wakeServer()
