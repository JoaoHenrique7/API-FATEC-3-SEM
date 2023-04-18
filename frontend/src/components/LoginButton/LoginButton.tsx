import React, { Component } from 'react';
import Styles from './LoginButton.module.css';

interface LogoutButtonProps {
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  placeholder?: string;
}

class LogoutButton extends Component<LogoutButtonProps> {
  render() {
    const { onClick, type, placeholder } = this.props;
    return (
      <button className={Styles.loginButton} onClick={onClick} type={type} placeholder={placeholder}>{placeholder}</button>
    );
  }
}

export default LogoutButton;
