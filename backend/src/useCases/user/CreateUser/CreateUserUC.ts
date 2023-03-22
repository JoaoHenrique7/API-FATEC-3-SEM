import { uuid } from "uuidv4";
import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreateUserDTO from "./ICreateUserDTO";

export default class CreateUserUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}

    async execute(props: ICreateUserDTO) {
        const userExists = await this.userRepository.findByEmail(props.Email);

        if (userExists) {
            throw new Error('User already exists.');
        }   

        if(!props.Id) props.Id = uuid();
        const user = new User({ ...props });
        await this.userRepository.save(user);
    }
}