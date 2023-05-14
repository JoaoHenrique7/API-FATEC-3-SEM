import { Component } from 'react';
import styles from "./EditUserPage.module.css";
import UserForm from "../../../modules/EditUserForm/EditUserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import MainHeader from '../../../components/MainHeader/MainHeader';

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
        tipoDoUsuario: string,
        active : boolean
    ) => {

        let usuario: User = new User(nomeDoUsuario, nomeCompleto, cpf, email, senha, active, id);

        let validacao = await UserService.editUser(usuario);

        if (validacao) {
            alert("Usuário Editado com Sucesso!")
        } else {
            alert("Erro ao editar usuário.")
        }

    };

    render() {
        return (
            <div className={styles.content}>
                <MainHeader title="Edição de Usuário" area="Gerenciamento" pages={[ "Usuário" ]} />
                <div className={styles.container}>
                    <UserForm onSubmit={ this.handleEditUser } />
                </div>
            </div>
        );
    }
}

export default EditUserPage;
