import { modelRegister } from "../Model/Model.js";

export class ServicesRegister {
    async saveRegister(data) {
        const dataRegister = new modelRegister(data)
        return await dataRegister.save()
    }
    async getRegister() {
        return await modelRegister.find()
    }
    async editRegister(id, datos) {
        return await modelRegister.findByIdAndUpdate(id, datos)
    }
    async deleteRegister(id) {
        return await modelRegister.findByIdAndDelete(id)
    }
}