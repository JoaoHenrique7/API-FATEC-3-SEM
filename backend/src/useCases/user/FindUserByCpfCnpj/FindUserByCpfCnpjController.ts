import { Request, Response } from "express";
import FindUserByCpfCnpjUC from "./FindUserByCpfCnpjUC";

export class FindUserByCpfCnpjController {
    constructor(
        private findUserByCpfCnpjUC: FindUserByCpfCnpjUC
    ) {}

    async findUserByCpfCnpj(req: Request, res: Response) : Promise<Response> {
        const { cpfCnpj } = req.body;

        try {
            return res.status(200).json({
                Ok: true,
                Message: "User Found.",
                Data: await this.findUserByCpfCnpjUC.execute({ cpfCnpj })
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