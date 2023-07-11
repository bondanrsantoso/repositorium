import { Express, NextFunction, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";
import Pages from "./routes/Pages";

class NextjsExpressRouter {
  constructor(private express: Express, private next: NextServer) {}

  async init() {
    this.initApi();
    this.initPages();
    this.initErrors();
  }

  initApi() {
    // TODO: init API Routes here
  }

  initPages() {
    return new Pages(this.express, this.next).init();
  }

  initErrors() {
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      const err: any = new Error("Not found");
      err.status = 404;

      next(err);
    });

    this.express.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);
        res.locals.error = err;
        res.locals.errorDescription = err.message;
        this.next.render(req, res, "/_error", {});
      }
    );
  }
}

export default NextjsExpressRouter;
