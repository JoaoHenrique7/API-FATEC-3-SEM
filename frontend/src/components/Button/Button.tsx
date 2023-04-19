import React, { Component } from 'react';
import Styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className: string;
  placeholder?: string;
  imageSrc?: string;
}

class Button extends Component<ButtonProps> {
  render() {
    const { onClick, type, className, placeholder, imageSrc } = this.props;
    return (
      <button className={`${Styles[className]}`} onClick={onClick} type={type} >
        {imageSrc ? (
          <div>
            <img className={Styles.icon} src={imageSrc} alt="icon" />
            <span className={Styles.placeholder}>{ placeholder }</span>
          </div>
        ) : (
          <div>{ placeholder }</div>
        )}
      </button>
    );
  }
}

export default Button;
