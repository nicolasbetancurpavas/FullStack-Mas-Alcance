import mongoose from "mongoose";
import moment from "moment-timezone"
const schema = mongoose.Schema
const RegisterRequests = new schema({
    method: {
        require: true,
        type: String,
    },
    date: {
        require: true,
        type: String,
        default: moment().tz("America/Bogota").format("HH:mm:ss")
    },
    data: {
        require: true,
        type: [],
    }
}, { versionKey: false })
export const modelRegister = mongoose.model("Register", RegisterRequests)

