import { Component } from 'react';
import styles from "./EditUserPage.module.css";
import UserForm from "../../../modules/EditUserForm/EditUserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import MainHeader from '../../../components/MainHeader/MainHeader';
import SaltyAlert from '../../../model/utils/SaltyAlert';

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
            new SaltyAlert().toast({
                icon: 'Success',
                text: 'Usuário editado com sucesso!',
                timerInMiliseconds: 5000
            });
        } else {
            new SaltyAlert().toast({
                icon: 'Error',
                text: 'Erro ao editar usuário',
                timerInMiliseconds: 5000
            });
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
