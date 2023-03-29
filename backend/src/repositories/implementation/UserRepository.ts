import User from "../../model/User";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    // create
    save(user: User): Promise<User> {
        return User.create({ userName: user.userName, fullName: user.fullName, cpfCnpj: user.cpfCnpj, email: user.email, password: user.password, active: user.active });
    }

    // read by email
    findByEmail(email: string): Promise<User | null> {
        return User.findOne({ where: { email: email } });
    }

     // read by Cpf and Cnpj
     findByCpfCnpj(cpfCnpj: string): Promise<User | null> {
        return User.findOne({ where: { cpfCnpj: cpfCnpj } });
    }

     // read by userName
     findByUserName(userName: string): Promise<User | null> {
        return User.findOne({ where: { userName: userName } });
    }

    // read by fullName
    findByFullName(fullName: string): Promise<User | null> {
        return User.findOne({ where: { fullName: fullName } });
    }

    // read all
    findAll(): Promise<User[]> {
        return User.findAll();
    }

    // delete
    async removeByEmail(email: string): Promise<User | null> {
        const deletedCount = await User.destroy({ where: { email: email } });
        if (deletedCount > 0) {
            return null;
        } else {
            throw new Error(`User with email ${email} not found.`);
        }
    }
}