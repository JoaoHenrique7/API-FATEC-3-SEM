import React from "react";
import styles from "./Table.module.css";
import UserResponse from "../../model/interfaces/UserResponse";
import UserService from "../../services/UserService/UserService";

import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
import User from "../../model/classes/User";
import Search from "../Search/Search";


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

  async onRemoveUser(selectedUser: User) {
    let response = await UserService.deleteUser(selectedUser.id);
    console.log(response);
    alert("teste");
  }

  onEditUser(selectedUser: User) {
    localStorage.setItem('user', JSON.stringify(selectedUser));
    this.redirectPage(selectedUser);
  }

  redirectPage(selectedUser: User) {
  // eslint-disable-next-line no-restricted-globals
  location.href = "/editUser";
  }

  
  render() {
    return (
      <table className={styles.table}>
        <thead>
          {/* <Search /> */}
        </thead>
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
          {this.state.data.map((user) => {
            return (
              <tr>
                {/* <td>{ user.userName }</td> */}
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{String(user.active) ? "Ativo" : "Inativo"}</td>
                {/* <td>{ }</td> */}
                <td>
                  <img
                    onClick={() => this.onEditUser(user)}
                    className={styles.pencil}
                    src={pencil}
                    alt="pencil"
                  />
                  <img
                    onClick={() => this.onRemoveUser(user)}
                    className={styles.trash}
                    src={trash}
                    alt="trash"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
