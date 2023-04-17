import React, { Component } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  imageSrc?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
}

class Button extends Component<ButtonProps> {
  render() {
    const { onClick, imageSrc, label, type="button" } = this.props;
    return (
      <button className={styles.button} onClick={onClick} type={type}>
        {imageSrc && (
          <img className={styles.icon} src={imageSrc} alt="label" />
        )}
        <div>{label}</div>
      </button>
    );
  }
}

export default Button;
