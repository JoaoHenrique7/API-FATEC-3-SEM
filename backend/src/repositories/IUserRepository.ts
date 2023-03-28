import User from "../model/User";

export default interface IUserRepository {
    save(user: User) : Promise<User>
    findByEmail(email: string) : Promise<User | null>
    findByCpfCnpj(cpfCnpj: string) : Promise<User | null>
    findByUserName(userName: string) : Promise<User | null>
    findByFullName(fullName: string) : Promise<User | null>
    findAll() : Promise<User[]>
    removeByEmail(email: string): Promise<User | null>
}
