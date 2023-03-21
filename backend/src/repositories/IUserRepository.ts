import User from "../model/User";

export default interface IUserRepository {
    save(user: User) : Promise<User>
    findByEmail(email: string) : Promise<User | null>
    findAll() : Promise<User[]>
}
