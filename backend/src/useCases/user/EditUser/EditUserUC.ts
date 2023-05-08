import { uuid } from "uuidv4";
import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import IEditUserDTO from "./IEditUserDTO";

export default class EditUserUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: IEditUserDTO) {

        const userExists = await this.userRepository.findByEmail(props.email);

        if (userExists) {
            throw new Error('User already exists.');
        }

        const user = new User({ ...props });
        await this.userRepository.editUser(user.id.toString());
    }
}