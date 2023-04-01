import mongoose from "mongoose";

export const conectionMongo = async () => {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('EXITO conexion BD')
    }
    catch (error) {
        console.log(error)
    }
}