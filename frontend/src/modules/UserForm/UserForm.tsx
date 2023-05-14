import React, { Component, FormEvent, ChangeEvent } from 'react';
import Styles from '../UserForm/UserForm.module.css';
import InputText from '../../components/InputText/InputText';

interface UserFormFormState {
    nomeCompleto: string;
    cpf: string;
    nomeDoUsuario: string;
    tipoDoUsuario: string;
    email: string;
    senha: string
    confirmarSenha: string;
}

interface UserFormFormProps {
    onSubmit: (
        nomeCompleto: string, cpf: string,
        nomeDoUsuario: string, tipoDoUsuario: string,
        email: string, senha: string,
        confirmarSenha: string
    ) => void;
}

class UserForm extends Component<UserFormFormProps, UserFormFormState> {
    constructor(props: UserFormFormProps) {
        super(props);
        this.state = {
            nomeCompleto: '',
            cpf: '',
            nomeDoUsuario: '',
            tipoDoUsuario: '0',
            email: '',
            senha: '',
            confirmarSenha: ''
        };
    }

    handleNomeCompletoChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ nomeCompleto: event.target.value });
    };

    handleCpfChange = (event: ChangeEvent<HTMLInputElement>, isCpf?: boolean) => {
        let cpf = event.target.value;
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        this.setState({ cpf: cpf });
    };

    handleNomeDoUsuarioChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ nomeDoUsuario: event.target.value });
    };

    handleTipoDoUsuarioChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ tipoDoUsuario: event.target.value });
    };

    handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    };

    handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ senha: event.target.value });
    };

    handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ confirmarSenha: event.target.value });
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {
            nomeCompleto, cpf,
            nomeDoUsuario, tipoDoUsuario,
            email, senha, confirmarSenha
        } = this.state;

        if(senha !== confirmarSenha) {
            alert("Senhas Não estão iguais");
        } else {
            this.props.onSubmit(nomeCompleto, cpf, nomeDoUsuario, tipoDoUsuario, email, senha, confirmarSenha);
        }
    };

    render() {
        const {
            nomeCompleto, cpf,
            nomeDoUsuario, tipoDoUsuario,
            email, senha, confirmarSenha
        } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <div className={ Styles.container }>
                    <div className={ Styles.nomeCompleto }>
                        <InputText
                            maxLength={ 255 }
                            value={ nomeCompleto }
                            onChange={ this.handleNomeCompletoChange }
                            placeholder="Insira o nome completo"
                            mytype="text"
                            label="Nome completo"
                        />
                    </div>
                    <div className={ Styles.cpf }>
                        <InputText
                            maxLength={ 14 }
                            value={ cpf }
                            onChange={ this.handleCpfChange }
                            placeholder="Insira o CPF"
                            mytype="text"
                            label="CPF"
                            isCpf={ true }
                        />
                    </div>
                    <div className={ Styles.nomeDoUsuario }>
                        <InputText
                            maxLength={ 100 }
                            value={ nomeDoUsuario }
                            onChange={ this.handleNomeDoUsuarioChange }
                            placeholder="Insira o nome de usuário"
                            mytype="text"
                            label="Nome de usuário"
                        />
                    </div>
                    <div className={ Styles.email }>
                        <InputText
                            maxLength={ 255 }
                            value={ email }
                            onChange={ this.handleEmailChange }
                            placeholder="Insira o email"
                            mytype="email"
                            label="Email"
                        />
                    </div>
                    <div className={ Styles.senha }>
                        <InputText
                            maxLength={ 25 }
                            value={ senha }
                            onChange={ this.handleSenhaChange }
                            placeholder="Insira a senha"
                            mytype="password"
                            label="Senha"
                        />
                    </div>
                    <div className={ Styles.confirmarSenha }>
                        <InputText
                            maxLength={ 25 }
                            value={ confirmarSenha }
                            onChange={ this.handleConfirmarSenhaChange }
                            placeholder="Confirme a senha"
                            mytype="password"
                            label="Confirmar a senha"
                        />
                    </div>
                    <div className={ Styles.tipoDoUsuario }>
                        <label >Tipo de usuário</label>
                        <br></br>
                        <select className={ Styles.comboBox } name="userType" required id="userType" value={ tipoDoUsuario } onChange={ this.handleTipoDoUsuarioChange }>
                            <option value="0">Administrador</option>
                            <option value="1">Usuário</option>
                        </select>
                    </div>
                    <div className={ Styles.botao }>
                        <button className={ Styles.button }>Salvar</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;







