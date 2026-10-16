import express from "express";
import "dotenv/config";

export class Server {
  constructor() {
    this.app = express();
    this.app.port = process.env.PORT || 3001;

    this.middlewares();
    this.routes();
  }

  // segundo metodo de mi clase server
  routes() {
    this.app.get("/", (req, res) => {
      res.send({
        message: "hola mundo desde mi servidor ",
      });
    });
  }

  //Metodo tres de mi clase server
  methodThree() {
    this.app.use(express.stactic("public"));

  // primer metodo de mi clase server
  listen() {
    this.app.listen(this.app.port, () => {
      console.log(`servidor corriendo en el puerto: ${this.app.port}`);
    });
  }
}
}export default Server;
