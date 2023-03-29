import UserRepository from "../../../repositories/implementation/UserRepository";
import { FindUserByCpfCnpjController } from "./FindUserByCpfCnpjController";
import FindUserByCpfCnpjUC from "./FindUserByCpfCnpjUC";

export const findUserByCpfCnpj = new FindUserByCpfCnpjController(
    new FindUserByCpfCnpjUC(
        new UserRepository()
    )
);