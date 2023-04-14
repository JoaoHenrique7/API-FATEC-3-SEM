import React from "react";
import styles from "./Table.module.css";
import DataService from "../../services/DataService/DataService";
import User from "../../model/classes/User";

interface resProps {
    Ok: boolean;
    Message: string;
    Data: User[];
}

class Table extends React.Component<{}, resProps> {
    state: resProps = {
        Ok: false,
        Message: "",
        Data: []
    }

    componentDidMount(): void {
        var data = DataService.getAllUsers();
        data.then((response: resProps) => {
            this.setState(() => ({
                Ok: response.Ok,
                Message: response.Message,
                Data: response.Data
            }));
        });
    }

    render() {
        return(
            <table className={ styles.table }>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Data.map((user) => {
                            return (
                                <tr>
                                    <td>{ user.userName }</td>
                                    <td>{ user.fullName }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.cpf }</td>
                                    <td>{ String(user.active) }</td>
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