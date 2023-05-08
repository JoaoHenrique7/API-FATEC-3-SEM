import React from "react";
import styles from "./Table.module.css";    
import UserResponse from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";

import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'
import User from "../../model/classes/User";
import Swal from 'sweetalert2'

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
        Swal.fire({
            title: 'Você tem certeza?',
            text: 'Você não poderá reverter isso!',
            showCancelButton: true,
            cancelButtonText: 'Não',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            confirmButtonColor: '#3085d6',
          }).then((result) => {
            if (result) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
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
            <table className={ styles.table }>
                <thead>
                    <tr>
                        {/* <th>Username</th> */}
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Status</th>
                        {/* <th>Tipo de usuário</th> */}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((user) => {
                            return (
                                <tr>
                                    {/* <td>{ user.userName }</td> */}
                                    <td>{ user.fullName }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.cpf }</td>
                                    <td>{ String(user.active) ? "Ativo" : "Inativo" }</td>
                                    {/* <td>{ }</td> */}
                                    <td>
                                        <img onClick={() => this.onEditUser(user)} className={styles.pencil} src={pencil} alt='pencil'/>
                                        <img onClick={() => this.onRemoveUser(user)} className={styles.trash} src={trash} alt='trash'/>
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