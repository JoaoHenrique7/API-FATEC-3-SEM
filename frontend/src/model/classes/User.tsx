export default class User {

    private id: number = -1;
    private userName: string = '';
    private fullName: string = '';
    private cpfCnpj: string = '';
    private email: string = '';
    private password: string = '';
    private active: boolean = false;

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