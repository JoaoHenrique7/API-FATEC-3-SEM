import { Request, Response } from "express";
import CreateUserUC from "./CreateUserUC";

export class CreateUserController {
    constructor(
        private createUserUC: CreateUserUC
    ) {}

    async create(req: Request, res: Response) : Promise<Response> {
        const { Id, Name, Email, Password } = req.body;
        try {
            await this.createUserUC.execute({ Id, Name, Email, Password });

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