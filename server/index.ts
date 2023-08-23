import dotenv from "dotenv";
import Server from "./server";
import { AppDataSource } from "./Datasource";

dotenv.config();

const begin = async () => {
  await AppDataSource.initialize();
  console.log("[TYPEORM] datasource initialised");

  await new Server((process.env.EXPRESS_PORT as string) || 7400).start();

  console.log(
    `Server running in ${process.env.NODE_ENV} at port ${process.env.EXPRESS_PORT}`
  );
};

begin();
