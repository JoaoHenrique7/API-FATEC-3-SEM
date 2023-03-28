import React, { Component } from 'react';
import * as bcrypt from 'bcryptjs';
import DataService from '../../services/DataService/DataService';
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

  handleLogin = async (username: string, password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashUsername = bcrypt.hashSync(username, salt)
    const hashPassword = bcrypt.hashSync(password, salt);
    debugger;
    let matchUser = DataService.authenticateUser(hashUsername, hashPassword)
    if (await matchUser === true) {
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