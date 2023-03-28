import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import IFindUserByCpfCnpjDTO from './IFindUserByCpfCnpjDTO';

export default class FindUserByCpfCnpjUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}
    
    async execute(props: IFindUserByCpfCnpjDTO): Promise<User>  {
        const user = await this.userRepository.findByCpfCnpj(props.cpfCnpj);

        if (!user) throw new Error("User not found.");

        return user;        
    }
}
