import { Request, Response } from "express";
import CreateUserUC from "./CreateUserUC";

export class CreateUserController {
    constructor(
        private createUserUC: CreateUserUC
    ) { }

    async create(req: Request, res: Response): Promise<Response> {

        const { userName, fullName, cpfCnpj, email, password, active } = req.body;

        try {
            await this.createUserUC.execute({ userName, fullName, cpfCnpj, email, password, active });

            return res.status(200).json({
                Ok: true,
                Message: "Created.",
                Data: []
            });
        } catch (err: any) {
            return res.status(400).json({
                Ok: false,
                Message: err,
                Data: []
            });
        }
    }
}