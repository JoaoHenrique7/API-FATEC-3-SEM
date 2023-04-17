import User from "../classes/User";

export default interface UserResponse {
    ok: boolean;
    message: string;
    data: Array<User>;
}