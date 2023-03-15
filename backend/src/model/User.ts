import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "User", timestamps: true })
export default class User extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING(16), allowNull: true })
    username?: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    fullName!: string;

    @Column({ type: DataType.STRING(18), allowNull: false })
    cpfCNPJ!: string;

    @Column({ type: DataType.STRING(150), allowNull: false })
    email!: string;

    @Column({ type: DataType.STRING(64), allowNull: false })
    password!: string;

    @Column({ type: DataType.BOOLEAN, allowNull: false })
    active!: boolean;
}