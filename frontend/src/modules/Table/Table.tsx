import React from "react";
import styles from "./Table.module.css";    
import UserResponse from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";

interface TableProps {

}

interface TableState extends UserResponse {

}

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

    private buildComponent() {
        if (this.state.data.length === 0) {
            return <p>Carregando...</p>
        } else {
            return(
                <table className={ styles.table }>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CPF/CNPJ</th>
                            <th>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((user) => {
                                return (
                                    <tr>
                                        <td>{ user.userName }</td>
                                        <td>{ user.fullName }</td>
                                        <td>{ user.email }</td>
                                        <td>{ user.cpfCnpj }</td>
                                        <td>{ user.active? 'Sim' : 'Não' }</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            )
        }
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}

export default Table;