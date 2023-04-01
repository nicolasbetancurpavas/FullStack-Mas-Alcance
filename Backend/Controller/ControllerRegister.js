import axios from "axios"
import { ServicesRegister } from "../Services/Services.js"

export class ControllerRegister {
    constructor() { }
    async getRegisters(request, response) {
        const registers = new ServicesRegister()
        try {
            const dataRegisters = await registers.getRegister()
            response.status(200).json({
                "message": 'exito en la consulta de registros',
                "data": dataRegisters
            })
        } catch (error) {
            response.status(400).json({
                "message": `error en la consulta ${error}`,
                "data": null
            })
        }
    }
    async deleteRegister(request, response) {
        const idRegistro = request.params.id
        const registerDelete = new ServicesRegister()
        try {
            const data = await registerDelete.deleteRegister(idRegistro)
            response.status(200).json({
                "message": 'exito en la eliminacion de registro'

            })
        } catch (error) {
            response.status(400).json({
                "message": `error ${error}`,
                "data": null
            })
        }
    }
    async updateRegister(request, response) {
        const idRegistro = request.params.id
        const newData = request.body
        const registerDelete = new ServicesRegister()
        try {
            await registerDelete.editRegister(idRegistro, newData)
            response.status(200).json({
                "message": `exito en la actualizacion de registro ${idRegistro}`,
                "data": ""
            })
        } catch (error) {
            response.status(400).json({
                "message": `error ${error}`,
                "data": null
            })
        }
    }
}