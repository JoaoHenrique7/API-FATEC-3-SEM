import { Component } from 'react';
import styles from "./CreateUserForm.module.css";
import Navbar from "../../../modules/Navbar/Navbar";
import UserForm from "../../../modules/UserForm/UserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';

interface CreateUserPageProp {}

interface CreateUserPageState {}

class CreateUserForm extends Component<CreateUserPageProp, CreateUserPageState> {
      handleCreateUser = async (nomeCompleto: string,
        cpf : string,
        nomeDoUsuario : string,
        tipoDoUsuario : string,
        email : string,
        senha : string,
        confirmarSenha : string) => {

        let usuario : User = new User(nomeDoUsuario, nomeCompleto,cpf,email,senha,true);

        let validacao = await UserService.createUser(usuario);

        if(validacao) {
            alert("Usuário Adicionado com Sucesso!")
        } else {
            alert("Erro ao adicionar o usuário.")
        }

        };

        render() {
            const breadcrumbList = [{name: "Home"},{name: "Gerenciamento de usuário"}, {name: "Adicionar Usuários"}];
            return (
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <Navbar pathList={breadcrumbList}/>
                        <h1>Criação de Usuários</h1>
                    </div>
                    <div className={styles.container}>
                        <UserForm onSubmit={this.handleCreateUser} />
                    </div>
                </div>
            );
        }
}

export default CreateUserForm;
