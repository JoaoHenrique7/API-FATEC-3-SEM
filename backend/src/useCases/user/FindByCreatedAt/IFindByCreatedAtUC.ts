import User from "../../../model/User";
import IUserRepository from "../../../repositories/IUserRepository";
import IFindByCreatedAtDTO from './FindByCreatedAtDTO';

export default class FindByCreatedAtUC {
    constructor(
       private userRepository: IUserRepository 
    ) {}
    
    async execute(props: IFindByCreatedAtDTO): Promise<number>  {
        const user = await this.userRepository.findByCreatedAt(props.createdAt, props.createdAt);

        if (!user) throw new Error("User not found.");
        
        return user;
    } 
}