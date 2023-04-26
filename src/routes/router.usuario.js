import { Router } from "express"
import getUsers from "../config/dbuser.js"

const  routerUsuario = new Router()

routerUsuario.get("", getUsers)

export default routerUsuario