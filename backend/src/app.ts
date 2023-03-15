import express from 'express';
import connection from './db/dbconfig';
import dotenv from 'dotenv';

export const app = express();

dotenv.config();

console.log("Tentando sincronizar com banco de dados... ");
connection.sync({ alter: true }).then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((err) => {
    console.log("[ ERR ]", err);
});