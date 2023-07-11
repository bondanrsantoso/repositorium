import bodyParser from "body-parser";
import path from "path";
import favicon from "serve-favicon";
import {
  Express,
  NextFunction,
  Request,
  Response,
  static as serveStatic,
} from "express";

class Middleware {
  constructor(private express: Express) {}

  async init() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(
      favicon(path.join(__dirname, "..", "public", "favicon.ico"))
    );
    this.express.use(serveStatic(path.join(__dirname, "..", "public")));
  }

  initErrors() {
    this.express.use(
      async (err: any, req: Request, res: Response, next: NextFunction) => {
        console.error("Unexpected Error", err);

        return next(err);
      }
    );
  }
}

export default Middleware;
