import { Request, Response } from "express";
import EditUserUC from "./EditUserUC";
import * as bcrypt from "bcryptjs";

export class EditUserController {
    constructor(
        private editUserUC: EditUserUC
    ) { }

    async edit(req: Request, res: Response): Promise<Response> {

        const { id, userName, fullName, cpf, email, password, active, profile } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        try {
            await this.editUserUC.execute({id ,userName, fullName, cpf, email, password:hashPassword, active});

            return res.status(200).json({
                Ok: true,
                Message: "Edited.",
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