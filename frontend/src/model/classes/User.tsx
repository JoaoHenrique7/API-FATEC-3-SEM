export default class User {

    private id: number = -1;
    private fullName: string = '';
    private cpfCNPJ: string = '';
    private email: string = '';
    private active: boolean = false;

    constructor (fullName: string, cpfCNPJ: string, email: string, active: boolean, id?: number) {
        id? this.id = id : this.id = -1;
        this.fullName = fullName;
        this.cpfCNPJ = cpfCNPJ;
        this.email = email;
        this.active = active;
    }

    public getId(): number {
        return this.id;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public getCpfCNPJ(): string {
        return this.cpfCNPJ;
    }

    public getEmail(): string {
        return this.email;
    }

    public isActive(): boolean {
        return this.active;
    }
}