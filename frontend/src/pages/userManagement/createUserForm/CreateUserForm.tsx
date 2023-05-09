import { Component } from 'react';
import styles from "./CreateUserForm.module.css";
import UserForm from "../../../modules/UserForm/UserForm";
import User from '../../../model/classes/User';
import UserService from '../../../services/UserService/UserService';
import { Navigate } from "react-router-dom";
import { Session } from "../../../model/utils/Session";
import MainHeader from '../../../components/MainHeader/MainHeader';
import SaltyAlert from '../../../model/utils/SaltyAlert';

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

        let usuario: User = new User(nomeDoUsuario, nomeCompleto, cpf, email, senha, true);

        let validacao = await UserService.createUser(usuario);

        if (validacao) {
            new SaltyAlert().modal({
                icon: 'Success',
                title: 'Sucesso',
                text: 'Usuário adicionado com sucesso!',
                closeOnClickOutside: true,
                timerInMiliseconds: 10000
            });
        } else {
            new SaltyAlert().modal({
                icon: 'Error',
                title: 'Erro',
                text: 'Erro ao adicionar usuário!',
                closeOnClickOutside: true,
                timerInMiliseconds: 10000
            });
        }

    };

    render() {
        const session = Session();
        if (session.profile.type === 1) {
            return (
                <div className={styles.content}>
                    <MainHeader title="Criação de Usuários" area="Navegação" pages={[ "Usuários" ]} />
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
