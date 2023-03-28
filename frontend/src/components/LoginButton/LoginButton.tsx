import React, { Component } from 'react';
import Styles from './LoginButton.module.css';

interface LogoutButtonProps {
  onClick?: () => void;
  mytype: "button" | "submit" | "reset";
  placeholder?: string;
}

class LogoutButton extends Component<LogoutButtonProps> {
  render() {
    const { onClick, mytype, placeholder } = this.props;
    return (
      <button className={Styles.loginButton} onClick={onClick} type={mytype} placeholder={placeholder}>{placeholder}</button>
    );
  }
}

export default LogoutButton;
