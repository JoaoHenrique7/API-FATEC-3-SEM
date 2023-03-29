import User from "../../model/classes/User";
import AuthenticationCredentials from "../../model/interfaces/AuthenticationCredentials";
import UpdateUserParams from "../../model/interfaces/UpdateUserParams";


export default class DataService {

    public static authenticateUser(email: string, password: string): boolean {

        const credentials: AuthenticationCredentials = {
            email: email,
            password: password,
        };

        fetch('http://localhost:3000/auth/login', {
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

    public static getAllUsers() {
        fetch('http://localhost:3000/user/createUser', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                const jsonResponse = response.json();

                return jsonResponse;
            } else {
                return [];
            }
        }).catch((error) => {
            console.error(error);
        });

        return [];
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
        });

        return false;
    }

    public static getUserByEmail(email: string) {

        const requestBody = { email: email };

        fetch('http://localhost:3000/user/findUserByEmail', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem with the request, check the params and try again');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    public static getUserByCpfCnpj(cpfCnpj: string) {

        const requestBody = { cpfCnpj: cpfCnpj };

        fetch('http://localhost:3000/user/findUserByCpfCnpj', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem with the request, check the params and try again');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    public static getUserByUserName(userName: string) {

        const requestBody = { userName: userName };

        fetch('http://localhost:3000/user/findUserByUserName', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem with the request, check the params and try again');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    public static getUserByFullName(fullName: string) {

        const requestBody = { fullName: fullName };

        fetch('http://localhost:3000/user/findUserByFullName', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem with the request, check the params and try again');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    public static async getUserById(userId: number): Promise<User | undefined> {

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

        const requestBody = {
            userId: userId,
        };

        fetch('http://localhost:3000/user/deleteUser', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(requestBody),
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