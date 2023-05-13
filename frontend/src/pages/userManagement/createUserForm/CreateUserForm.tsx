import { Component } from 'react';
import styles from "./CreateUserForm.module.css";
import Navbar from "../../../modules/Navbar/Navbar";
import UserForm from "../../../modules/UserForm/UserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import { Navigate } from "react-router-dom";
import { Session } from "../../../model/utils/Session";

interface CreateUserPageProp { }

interface CreateUserPageState { }

class CreateUserForm extends Component<CreateUserPageProp, CreateUserPageState> {
    handleCreateUser = async (nomeCompleto: string,
        cpf: string,
        nomeDoUsuario: string,
        tipoDoUsuario: string,
        email: string,
        senha: string,
        confirmarSenha: string) => {

        const ADMIN = '0';
        const USUARIO = '1';

        let usuario: User = new User(nomeDoUsuario, nomeCompleto, cpf, email, senha, true);

        let validacao = false;

        console.log(tipoDoUsuario)
        console.log(typeof(tipoDoUsuario))
        
        if(tipoDoUsuario === ADMIN) {
            validacao = await UserService.createAdmin(usuario);
        } else if (tipoDoUsuario === USUARIO) {
            validacao = await UserService.createUser(usuario);
        } else {
            alert("Tipo de usuário desconhecido!");
            return;
        }

        if (validacao) {
            alert("Usuário Adicionado com Sucesso!");
        } else {
            alert("Erro ao adicionar o usuário.");
        }
    };

    render() {
        const breadcrumbList = [{ name: "Home" }, { name: "Gerenciamento de usuário" }, { name: "Adicionar Usuários" }];
        const session = Session();
        if (session.profile.type === 1) {
            return (
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <Navbar pathList={breadcrumbList} />
                        <h1>Criação de Usuários</h1>
                    </div>
                    <div className={styles.container}>
                        <UserForm onSubmit={this.handleCreateUser} />
                    </div>
                </div>
            );
        } else {
            return <Navigate to="/initialuser" />;
        }
    }
}

export default CreateUserForm;
