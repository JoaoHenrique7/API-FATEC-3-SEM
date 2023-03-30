export default class User {

    public id: number;
    public userName: string;
    public fullName: string;
    public cpfCnpj: string;
    public email: string;
    public password: string;
    public active: boolean;

    constructor (userName: string, fullName: string, cpfCnpj: string, email: string, password: string, active: boolean, id?: number) {
        id? this.id = id : this.id = -1;
        this.userName = userName;
        this.fullName = fullName;
        this.cpfCnpj = cpfCnpj;
        this.email = email;
        this.password = password;
        this.active = active;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getId(): number {
        return this.id;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public getCpfCnpj(): string {
        return this.cpfCnpj;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public isActive(): boolean {
        return this.active;
    }
}