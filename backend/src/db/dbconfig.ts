import { Sequelize } from "sequelize-typescript";
import User from "../model/User";
import Profile from "../model/Profile";

const connection = new Sequelize(
    "database",
    "postgres",
    "password",
    {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        models: [ User, Profile ]
    }
)

export default connection;