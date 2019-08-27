import express from "express";
import routes from "../routes";
import cors from "cors";

class App {
  constructor() {
    this.server = express();

    this.middleware;
    this.routes;
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
