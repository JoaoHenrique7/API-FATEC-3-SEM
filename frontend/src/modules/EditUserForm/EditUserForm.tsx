import React, { Component, FormEvent, ChangeEvent } from 'react';
import Styles from '../UserForm/UserForm.module.css';
import InputText from '../../components/InputText/InputText';
import { Session } from '../../model/utils/Session';
import userEvent from '@testing-library/user-event';
import User from "../../model/classes/User";

interface UserFormFormState {
  id: number;
  nomeCompleto: string;
  cpf: string;
  nomeDoUsuario: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  active: boolean;
}

interface UserFormFormProps {
  onSubmit: (id: number,
    nomeCompleto: string,
    cpf: string,
    nomeDoUsuario: string,
    email: string,
    senha: string,
    confirmarSenha: string,
    active: boolean
  ) => void;
}
const session = Session();
class EditUserForm extends Component<UserFormFormProps, UserFormFormState> {
  constructor(props: UserFormFormProps) {
    super(props);
    this.state = {
      id: session.id,
      nomeCompleto: session.fullName,
      cpf: session.cpf,
      nomeDoUsuario: session.userName,
      email: session.email,
      senha: '',
      confirmarSenha: '',
      active: true,
    };

  }


  
  handleNomeCompletoChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nomeCompleto: event.target.value });
  };

  handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ cpf: event.target.value });
  };

  handleNomeDoUsuarioChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nomeDoUsuario: event.target.value });
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
  
  editUserAdm (user:User){;
    this.setState({ nomeCompleto: user.fullName })
    this.setState({ cpf: user.cpf })
    this.setState({ active: user.active })
    this.setState({ email: user.email })
    this.setState({ id: user.id })
  }

  
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id,
      nomeCompleto,
      cpf,
      nomeDoUsuario,
      email,
      senha,
      confirmarSenha,
      active
    } = this.state;

    this.props.onSubmit(id, nomeCompleto, cpf, nomeDoUsuario, email, senha, confirmarSenha, active);
  };

  render() {
    const { id,
      nomeCompleto,
      cpf,
      nomeDoUsuario,
      email,
      senha,
      confirmarSenha,
      active
    } = this.state;
    
    if (session.profile.type === 0) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className={Styles.container}>
            <div className={Styles.nomeCompleto}>
              <label>Nome completo</label>
              <InputText
                value={nomeCompleto}
                onChange={this.handleNomeCompletoChange}
                placeholder="Insira o nome completo"
                mytype="text"
                maxLength={255}
              />
            </div>
            <div className={Styles.cpf}>
              <label >CPF</label>
              <InputText
                value={cpf}
                onChange={this.handleCpfChange}
                placeholder="Insira o CPF"
                mytype="text"
                maxLength={14}
                isCpf={true}
              />
            </div>
            <div className={Styles.nomeDoUsuario}>
              <label >Nome de usuário</label>
              <InputText
                value={nomeDoUsuario}
                onChange={this.handleNomeDoUsuarioChange}
                placeholder="Insira o nome de usuário"
                mytype="text"
                maxLength={255}
              />
            </div>
            <div className={Styles.email}>
              <label >Email</label>
              <InputText
                value={email}
                onChange={this.handleEmailChange}
                placeholder="Insira o email"
                mytype="email"
                maxLength={255}
              />
            </div>
            <div className={Styles.senha}>
              <label >Senha</label>
              <InputText
                value={senha}
                onChange={this.handleSenhaChange}
                placeholder="Insira a senha"
                mytype="password"
                maxLength={255}
              />
            </div>
            <div className={Styles.confirmarSenha}>
              <label >Confirmar a senha</label>
              <InputText
                value={confirmarSenha}
                onChange={this.handleConfirmarSenhaChange}
                placeholder="Confirme a senha"
                mytype="password"
                maxLength={255}
              />
            </div>
            <div className={Styles.botao}>
              <button className={Styles.button}>Salvar</button>
            </div>
          </div>
        </form>
      );
    }else{
      // this.editUserAdm()
      return (
        
        <form onSubmit={this.handleSubmit}>
          <div className={Styles.container}>
            <div className={Styles.nomeCompleto}>
              <label>Nome completo</label>
              <InputText
                value={nomeCompleto}
                onChange={this.handleNomeCompletoChange}
                placeholder="Insira o nome completo"
                mytype="text"
                maxLength={255}
              />
            </div>
            <div className={Styles.cpf}>
              <label >CPF</label>
              <InputText
                value={cpf}
                onChange={this.handleCpfChange}
                placeholder="Insira o CPF"
                mytype="text"
                maxLength={14}
                isCpf={true}
              />
            </div>
            <div className={Styles.nomeDoUsuario}>
              <label >Nome de usuário</label>
              <InputText
                value={nomeDoUsuario}
                onChange={this.handleNomeDoUsuarioChange}
                placeholder="Insira o nome de usuário"
                mytype="text"
                maxLength={255}
              />
            </div>
            <div className={Styles.email}>
              <label >Email</label>
              <InputText
                value={email}
                onChange={this.handleEmailChange}
                placeholder="Insira o email"
                mytype="email"
                maxLength={255}
              />
            </div>
            <div className={Styles.senha}>
              <label >Senha</label>
              <InputText
                value={senha}
                onChange={this.handleSenhaChange}
                placeholder="Insira a senha"
                mytype="password"
                maxLength={255}
              />
            </div>
            <div className={Styles.confirmarSenha}>
              <label >Confirmar a senha</label>
              <InputText
                value={confirmarSenha}
                onChange={this.handleConfirmarSenhaChange}
                placeholder="Confirme a senha"
                mytype="password"
                maxLength={255}
              />
            </div>
            <div className={Styles.botao}>
              <button className={Styles.button}>Salvar</button>
            </div>
          </div>
        </form>
      )
    }
  }
}

export default EditUserForm;







