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

    // read all
    findAll(): Promise<User[]> {
        return User.findAll();
    }

    // delete
    removeByEmail(email: string): Promise<User | null> {
        return User.findOne({ where: { email: email } });
    }

    // update
    update(user: User): Promise<User> {
        return User.create({ id: user.id, name: user.userName, email: user.email, password: user.password });
    }

}