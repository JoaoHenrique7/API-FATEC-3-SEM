import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./User";

@Table({ tableName: "Profile", timestamps: false })
export default class Profile extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id!: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;

    @Column({ type: DataType.INTEGER, allowNull: false })
    type!: number;
}