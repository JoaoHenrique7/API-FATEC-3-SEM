import React from "react";
import styles from "./Table.module.css";    
import UserResponse from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";
import User from "../../model/classes/User";
import { FaPen, FaTrash } from "react-icons/fa";
import Tag from "../../components/Tag/Tag";
import SaltyAlert from "../../model/utils/SaltyAlert";

interface TableProps {}

interface TableState extends UserResponse {}

class Table extends React.Component<TableProps, TableState> {
    
    constructor(props: TableProps) {
        super(props)

        this.state = {
            ok: false,
            message: '',
            data: []
        }
    }

    componentDidMount(): void {
        this.getAllUsers();
    }

    private getAllUsers(): void {
        const data: Promise<UserResponse> = UserService.getAllUsers();
        data.then((response: UserResponse) => {
            this.setState(() => ({
                ok: response.ok,
                message: response.message,
                data: response.data
            }));
        });
    }

    async onRemoveUser(selectedUser : User) {
        let response = await UserService.deleteUser(selectedUser.id);
        new SaltyAlert().modal({
            icon: 'Error',
            title: 'Erro',
            text: 'Credenciais incorretas!',
            closeOnClickOutside: true,
            timerInMiliseconds: 10000
        });
    }

    onEditUser(selectedUser : User) {
        console.log(selectedUser)
        this.redirectPage(selectedUser)
    }

    redirectPage(selectedUser: User) {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/editUser";
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((user) => {
                            return (
                                <tr>
                                    <td>{ user.fullName }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.cpf }</td>
                                    <td>{ String(user.active) ? <Tag label="Ativo" type="success" /> : <Tag label="Inativo" type="error" /> }</td>
                                    <td className={ styles.actions } >
                                        <FaPen onClick={ () => this.onEditUser(user) } />
                                        <FaTrash onClick={ () => this.onRemoveUser(user) } />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;