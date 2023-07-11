import express, { Express } from "express";
import next from "next";
import http, { Server as HttpServer } from "http";
import https, { Server as HttpsServer } from "https";
import NextJsExpressRouter from "./NextjsExpressRouter";
import Middleware from "./Middleware";
import fs from "fs";
import { NextServer } from "next/dist/server/next";

const httpServer = (express: Express) => {
  return http.createServer(express);
};

const httpsServer = (express: Express) => {
  const options = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH as string, "utf8"),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH as string, "utf8"),
  };
  return https.createServer(options, express);
};

class Server {
  private express: Express;
  private next: NextServer;
  private middleware: Middleware;
  private router: NextJsExpressRouter;
  private server?: HttpServer | HttpsServer;

  constructor(private port: number | string) {
    this.express = express();
    this.next = next({ dev: process.env.NODE_ENV !== "production" });
    this.middleware = new Middleware(this.express);
    this.router = new NextJsExpressRouter(this.express, this.next);
  }

  async start() {
    await this.next.prepare();
    await this.middleware.init();
    await this.router.init();
    this.server = httpServer(this.express);
    this.server.listen(this.port);
  }
}

export default Server;
