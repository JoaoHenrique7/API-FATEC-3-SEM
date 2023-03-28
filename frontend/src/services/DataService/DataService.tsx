import User from "../../model/classes/User";
import AuthenticationCredentials from "../../model/interfaces/AuthenticationCredentials";
import UpdateUserParams from "../../model/interfaces/UpdateUserParams";


export default class DataService {

    public static async authenticateUser(username: string, password: string): Promise<boolean> {

        const credentials: AuthenticationCredentials = {
            username: username,
            password: password,
        };

        fetch('URL TO-DO', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(credentials),
        }).then((response: Response) => {
            if (response.ok) {
                return true;
            } else {
                return false;
            }
        }).catch((error: Error) => {
            console.error(error);
        });

        return false;
    }

    public static createUser(user: User): boolean {
        fetch('http://localhost:3000/user/createUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((response) => {
            if (response.ok) {
                return true;
            } else {
                return false;
            }
        }).catch((error) => {
            console.error(error);
        })

        return false;
    }

    public static async getUser(userId: number): Promise<User | undefined> {

        fetch('URL TO-DO', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(userId),
        }).then(async (response: Response) => {
            const jsonResponse = JSON.parse(await response.json());
            return jsonResponse.user as User;
        }).catch((error: Error) => {
            console.error(error);
        });

        return undefined;
    }

    public static async updateUser(userId: number, newUser: User): Promise<boolean> {

        const parameters: UpdateUserParams = {
            userId: userId,
            newUser: newUser,
        };

        fetch('URL TO-DO', {
            method: "UPDATE",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(parameters),
        }).then((response: Response) => {
            if (response.ok) {
                return true;
            } else {
                return false;
            }
        }).catch((error: Error) => {
            console.error(error);
        });

        return false;
    }

    public static async deleteUser(userId: number): Promise<boolean> {

        fetch('URL TO-DO', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(userId),
        }).then((response: Response) => {
            if (response.ok) {
                return true;
            } else {
                return false;
            }
        }).catch((error: Error) => {
            console.error(error);
        });

        return false;
    }

}