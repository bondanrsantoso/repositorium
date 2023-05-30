/**
 * This modified index.ts sequelize file is made from the guide from
 * https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj
 */

import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const sequelize: Sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

export { Sequelize, sequelize };
