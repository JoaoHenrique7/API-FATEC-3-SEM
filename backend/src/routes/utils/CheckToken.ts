import { NextFunction, Request, Response } from "express";

export default function CheckToken (request: Request, response: Response, next: NextFunction) {
    // ATENÇÃO!!!!!
    // Ao adicionar um novo path aqui, NÃO INCLUA A RAIZ!
    // Por exemplo: no app.ts, a raiz das rotas de autenticação é /auth, e
    // a raiz das rotas do usuário é /user
    // Essas raízes não devem ser incluídas aqui, apenas a parte seguinte dela
    // Como podem ver abaixo, eu incluí apenas a parte /login da rota /auth/login
    const publicPaths = [
        '/login'
    ];

    if (publicPaths.includes(request.path)) return next();

    var token = request.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return response.status(401).send({
            Ok: false,
            Message: "Unauthorized",
            Data: [] 
        });
    }

    next();
}