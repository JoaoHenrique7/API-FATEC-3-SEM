import { Component } from 'react';
import styles from "./EditUserPage.module.css";
import Navbar from "../../../modules/Navbar/Navbar";
import UserForm from "../../../modules/EditUserForm/EditUserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import { Navigate } from "react-router-dom";
import { Session } from "../../../model/utils/Session";

interface EditUserPageProp { }

interface EditUserPageState { }

class EditUserPage extends Component<EditUserPageProp, EditUserPageState> {
    handleEditUser = async (
        id: number,
        nomeCompleto : string,
        cpf : string,
        nomeDoUsuario : string,
        email : string,
        senha : string,
        confirmarSenha : string,
        active : boolean
    ) => {

        let usuario: User = new User(nomeDoUsuario,nomeCompleto,cpf,email,senha,active,id);

        let validacao = await UserService.editUser(usuario);

        if (validacao) {
            alert("Usuário Editado com Sucesso!")
        } else {
            alert("Erro ao editar usuário.")
        }

    };

    render() {
        const breadcrumbList = [{ name: "Home" }, { name: "Gerenciamento de usuário" }, { name: "Adicionar Usuários" }];
        const session = Session();
            return (
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <Navbar pathList={breadcrumbList} />
                        <h1>Edição de Usuários</h1>
                    </div>
                    <div className={styles.container}>
                        <UserForm onSubmit={this.handleEditUser} />
                    </div>
                </div>
            );
    }
}

export default EditUserPage;
