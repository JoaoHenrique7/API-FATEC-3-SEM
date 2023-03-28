import React, { Component } from 'react';
import Styles from './LogonPage.module.css';
import illustration from '../../assets/Illustration.svg';
import Logo from '../../components/Logo/Logo'
import Form from '../../modules/LoginForm/LoginForm'

interface LogonPageState {
  loggedIn: boolean;
}

class LogonPage extends Component<{}, LogonPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handleLogin = (username: string, password: string) => {
    // Aqui você pode adicionar a lógica de autenticação do seu aplicativo
    if (username === 'admin' && password === '123') {
      this.setState({ loggedIn: true });
    } else {
      alert('Invalid credentials');
    }
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
  };
  
  render() {
    const { loggedIn } = this.state;
    return (
      <div className={Styles.content}>
        <div className={Styles.leftColumn}>
          <Logo size={"small"}/>
          {loggedIn ? (
            <h2>Logado</h2>
          ) : (
            <Form onSubmit={this.handleLogin}/>
          )}
        </div>
        <div className={Styles.rightColumn}>
          <img src={illustration} alt="IMG" className={Styles.logonPicture}></img>
        </div>
      </div>
    );
  }
}

export default LogonPage;