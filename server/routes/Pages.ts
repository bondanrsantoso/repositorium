import { Express } from "express";
import { NextServer } from "next/dist/server/next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";

class Pages {
  constructor(private express: Express, private next: NextServer) {
    // this.express = express;
    // this.next = next;
  }

  init() {
    this.initDefaultPages();
  }

  initDefaultPages() {
    this.express.get("/", (req, res) => {
      return this.next.render(
        req,
        res,
        "/index",
        req.query as NextParsedUrlQuery
      );
    });

    this.express.get("*", (req, res) => {
      return this.next.render(
        req,
        res,
        `${req.path}`,
        req.query as NextParsedUrlQuery
      );
    });
  }
}

export default Pages;
