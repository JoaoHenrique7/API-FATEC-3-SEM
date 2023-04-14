import React, { Component, FormEvent, ChangeEvent } from 'react';
import Styles from  './LoginForm.module.css';
import InputText from '../../components/InputText/InputText';
import LogoutButton from '../../components/LoginButton/LoginButton';

interface LoginFormState {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmit(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className={Styles.loginform} onSubmit={this.handleSubmit}>
        <h2>Seja bem-vindo!</h2>
        <p className={Styles.loginSubTitles}>Por favor, insira suas credenciais</p>
        <p className={Styles.loginTitles}>Email</p>
        <InputText
          value={username}
          onChange={this.handleUsernameChange}
          placeholder="Insira seu email"
          mytype="text"
        />
        <p className={Styles.loginTitles}>Senha</p>
        <InputText
          value={password}
          onChange={this.handlePasswordChange}
          placeholder="Insira sua senha"
          mytype="password"
        />
        <br></br>
        <LogoutButton
          mytype='submit'
          placeholder='Entrar'
        />
      </form>
    );
  }
}

export default LoginForm;