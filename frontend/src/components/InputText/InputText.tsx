import React, { Component, ChangeEvent } from 'react';
import Styles from './InputText.module.css';

interface InputTextProps {
  value: string;
  mytype: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

class InputText extends Component<InputTextProps> {
  render() {
    const { value, onChange, placeholder, mytype } = this.props;
    return (
      <input
        className={Styles.inputText}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={mytype}
      />
    );
  }
}

export default InputText;
