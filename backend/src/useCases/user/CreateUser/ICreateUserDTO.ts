export default interface ICreateUserDTO {
    id?: number;
    userName: string;
    fullName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    active: boolean;
}