import User from "../../model/User";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    // create
    save(user: User) : Promise<User> {
        return User.create({ Id: user.id, Name: user.username, Email: user.email, Password: user.password });
    }

    // read by email
    findByEmail(email: string) : Promise<User | null> {
        return User.findOne({ where: { Email: email } })
    }

    // read all
    findAll() : Promise<User[]> {
        return User.findAll();
    }

    // delete
    removeByEmail(email: string) : Promise<User | null> {
        return User.findOne({ where: { Email: email } })
    }

    // update
    update(user: User) : Promise<User> {
        return User.create({ Id: user.id, Name: user.username, Email: user.email, Password: user.password });
    }
    
}