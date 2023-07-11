import dotenv from "dotenv";
import Server from "./server";

dotenv.config();

const begin = async () => {
  await new Server((process.env.EXPRESS_PORT as string) || 7400).start();

  console.log(
    `Server running in ${process.env.NODE_ENV} at port ${process.env.EXPRESS_PORT}`
  );
};

begin();
