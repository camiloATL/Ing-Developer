import express from "express";
import cors from "cors";
import routerUsuario from "../routes/router.usuario.js";
import bodyParser from "body-parser";
import getUsers from "./dbuser.js";

class Server {
  constructor() {
    this.port = 3000;
    this.app = express();
    this.router = express.Router();

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors());

    // MIDDLEWARES
    this.app.use(express.json());
    this.app.use("/index", this.router);//Ruta pricipal

    this.router.route("usuario").get((request, response)=>{
      this.getUsers().then(result => {
        response.json(result[0])
      })
    })

    this.app.listen(this.port, () => {
      console.log(`<<<...Se esta ejecutando la app Titan, en el puerto: ${this.port}...>>>`);
    });
  }
}
export default Server;
