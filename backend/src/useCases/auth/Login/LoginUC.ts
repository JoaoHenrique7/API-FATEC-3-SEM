import User from "../../../model/User";
import ILoginRepository from "../../../repositories/ILoginRepository";
import IUserRepository from "../../../repositories/IUserRepository";
import ILoginDTO from "./ILoginDTO";


export default class LoginUC {
    constructor(
        private userRepository:IUserRepository,
    ) {}

    async execute(props: ILoginDTO) : Promise<User> {
        const user = await this.userRepository.findByEmail(props.email);

        if (!user) throw new Error('Incorrect credentials')
            

        if (user.password != props.password) throw new Error("Incorrect credentials");
        
        return user;
    }
}