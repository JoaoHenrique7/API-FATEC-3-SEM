import User from "../classes/User";

export default interface UpdateUserParams {
    userId: number,
    newUser: User,
}