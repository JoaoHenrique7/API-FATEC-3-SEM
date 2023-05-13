import { Sequelize } from "sequelize-typescript";
import User from "../model/User";
import Profile from "../model/Profile";

import * as dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize(
    `API-3SEMESTRE`,
    `postgres`,
    `Casilveira020197*`,
    {
        dialect: "postgres",
        host: `127.0.0.1`,
        port: 5432,
        models: [ User, Profile ]
    }
)

export default connection;