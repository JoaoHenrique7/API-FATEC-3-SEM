import { Request, Response } from "express";
import GetAllUsersUC from "./GetAllUsersUC";

export class GetAllUsersController {
    constructor(
        private getAllUsersUC: GetAllUsersUC
    ) {}

    async getAllUsers(req: Request, res: Response) : Promise<Response> {

        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({
                Ok: false,
                Message: "Não autorizado.",
                Data: []
            });
        }

        return res.status(200).json({
            Ok: true,
            Message: `${token}`,
            Data: await this.getAllUsersUC.execute()
        });
    }
}