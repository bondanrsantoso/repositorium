import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import path from "path";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.NODE_ENV !== "production",
  port: (process.env.DB_PORT as any) || 3306,
  entities: [path.join(__dirname, "entities", "*.js")],
});
