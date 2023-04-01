import axios from "axios"
import { ServicesRegister } from "../Services/Services.js"

export class ControllerClient {

    constructor() { }
    getUser = async (request, response) => {
        const services = new ServicesRegister()
        try {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            const dataUser = users.data
            await services.saveRegister({
                method: "getUser",
                data: dataUser
            }).catch((error) => {
                response.status(500).json({
                    "message": `Error al guardar en la base de datos ${error}`,
                    "datos": null
                });
            });
            response.status(200).json({
                "message": "Exito en la consulta",
                "data": dataUser,
            })
        }
        catch (error) {
            response.status(400).json({
                "message": `Error al guardar registro en la bd ${error}`,
                "data": null
            })
        }
    }

    getPost = async (request, response) => {
        const services = new ServicesRegister()
        try {
            const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const dataPost = posts.data

            await services.saveRegister({
                method: "getPost",
                data: dataPost
            }).catch((error) => {
                response.status(500).json({
                    "mensage": `Error al guardar registro en la bd ${error} `,
                    "data": null
                })
            })

            response.status(200).json({
                "mensage": `Exito en la consulta`,
                "data": dataPost
            })

        } catch (error) {
            response.status(400).json({
                "mensage": `Error al guardar registro en la bd ${error}`,
                "data": null
            })
        }
    }

    getAlbumById = async (request, response) => {
        const albumId = request.params.id;
        const services = new ServicesRegister();
        try {
            const album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
            const dataAlbum = album.data;
            await services.saveRegister({
                method: "getAlbumById",
                data: dataAlbum
            }).catch((error) => {
                response.status(500).json({
                    "mensage": `Error al guardar registro en la bd ${error} `,
                    "data": null
                })
            })
            response.status(200).json({
                "message": "Exito en la consulta",
                "data": dataAlbum,
            });
        } catch (error) {
            response.status(400).json({
                "message": `Error al realizar la consulta: ${error}`,
                "data": null
            });
        }
    };
}