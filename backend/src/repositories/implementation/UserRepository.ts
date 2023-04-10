import User from "../../model/User";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    // create
    save(user: User): Promise<User> {
        return User.create({ userName: user.userName, fullName: user.fullName, cpfCnpj: user.cpf, email: user.email, password: user.password, active: user.active });
    }

    // find by Id
    findById(id: number): Promise<User | null> {
        return User.findOne({ where: { id: id } });
    }

    // find by Email
    findByEmail(email: string): Promise<User | null> {
        return User.findOne({ where: { email: email } });
    }

     // find by Cpf and Cnpj
     findByCpf(cpf: string): Promise<User | null> {
        return User.findOne({ where: { cpf: cpf } });
    }

     // find by userName
     findByUserName(userName: string): Promise<User | null> {
        return User.findOne({ where: { userName: userName } });
    }

    // find by fullName
    findByFullName(fullName: string): Promise<User | null> {
        return User.findOne({ where: { fullName: fullName } });
    }

    // find all
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