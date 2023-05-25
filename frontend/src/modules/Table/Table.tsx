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
        super(props);

        this.state = {
            ok: false,
            message: "",
            data: [],
        };
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
                data: response.data,
            }));
        });
    }

    async onRemoveUser(selectedUser : User) {
        var deletado = await UserService.deleteUser(selectedUser.id);

        if (deletado) {
            new SaltyAlert().toast({
                icon: 'Success',
                text: 'Usuário deletado com sucesso',
                timerInMiliseconds: 5000
            });
        } else {
            new SaltyAlert().toast({
                icon: 'Error',
                text: 'Falha ao deletar usuário',
                timerInMiliseconds: 5000
            });
        }

    }

  onEditUser(selectedUser: User) {
        localStorage.setItem('user', JSON.stringify(selectedUser));
        this.redirectPage(selectedUser);
  }

    redirectPage(selectedUser: User) {
        window.location.href = "/editUser";
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
                                <tr key={ user.id }>
                                    <td>{ user.fullName }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.cpf }</td>
                                    <td>{ String(user.active) === "true" ? <Tag label="Ativo" type="success" /> : <Tag label="Inativo" type="error" /> }</td>
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
