import React, { Component, FormEvent, ChangeEvent } from 'react';
import Styles from  '../LoginForm/LoginForm.module.css';
import InputText from '../../components/InputText/InputText';
import RecoveryLink from '../../components/BasicLink/BasicLink';
import Button from '../../components/Button/Button';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface RecoveryPassFormState {
  username: string;
}

interface RecoveryPassFormProps {
  onSubmit: (username: string ) => void;
}

class RecoveryPassForm extends Component<RecoveryPassFormProps, RecoveryPassFormState> {
  constructor(props: RecoveryPassFormProps) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username } = this.state;
    this.props.onSubmit(username);
  };

  sendEmail = async () => {
    try { 
        const serviceId = 'service_kqomqwj'; // substitua pelo ID do serviço Email.js que você está usando 
        const templateId = 'template_qarf2lg'; // substitua pelo ID do modelo Email.js que você está usando 
        const userId = 'l5AVz2asaABljn9nL'; // substitua pelo ID do usuário Email.js que você está usando 
        // const password = 'ONwnppS9K45w32HLtKPsk'; // substitua pela senha de aplicativo que você gerou 
        const templateParams = {
          from: 'bytech2022@outlook.com',
          message: this.handleUsernameChange,
          to_email: this.handleUsernameChange,
          
        };

        const result: EmailJSResponseStatus = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            userId
        );
        console.log(result); 
    } catch (error) {
         console.log(error); 
    } 
}; 

  render() {
    const { username } = this.state;
    return (
      <form className={Styles.recoveryform} onSubmit={this.handleSubmit}>
        <h2>Seja bem-vindo!</h2>
        <p className={Styles.recoverySubTitles}>Por favor, insira suas credenciais</p>
        <p className={Styles.recoveryTitles}>Email</p>
        <InputText
          value={username}
          onChange={this.handleUsernameChange}
          placeholder="Insira seu email"
          mytype="text"
        />
        <RecoveryLink 
          newPath= 'login'
          text='Entrar'
          className='recoveryLink'
        />
        <Button
          type='button'
          className='loginButton'
          placeholder='Enviar'
          onClick={this.sendEmail}
        />
      </form>
    );
  }
}

export default RecoveryPassForm;







