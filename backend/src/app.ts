import express from 'express';
import connection from './db/dbconfig';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';
import UserRoutes from './routes/UserRoutes';

export const app = express();

dotenv.config();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/user', UserRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
})

console.log("Tentando sincronizar com banco de dados... ");
connection.sync({ alter: true }).then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((err) => {
    console.log("[ ERR ]", err);
});