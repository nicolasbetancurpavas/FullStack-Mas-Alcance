import express from "express";
import { ControllerClient } from "../Controller/ControllerClient.js";
import { ControllerRegister } from "../Controller/ControllerRegister.js";

export const routes = express.Router()

const requestClient = new ControllerClient()
const requestRegister = new ControllerRegister()

routes.get("/app/mas-alcance/user", requestClient.getUser)
routes.get("/app/mas-alcance/post", requestClient.getPost)
routes.get("/app/mas-alcance/albums/:id", requestClient.getAlbumById)

routes.get("/app/mas-alcance/registers", requestRegister.getRegisters)
routes.put("/app/mas-alcance/register/:id", requestRegister.updateRegister)
routes.delete("/app/mas-alcance/register/:id", requestRegister.deleteRegister)
