import React, { Component, ChangeEvent } from 'react';
import Styles from './InputText.module.css';

interface InputTextProps {
  maxLength : number;
  value: string;
  mytype: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, isCpf?: boolean) => void;
  placeholder?: string;
  isCpf?:boolean;
}

class InputText extends Component<InputTextProps> {
  render() {
    const { maxLength, value, onChange, placeholder, mytype } = this.props;
    return (
      <input
        maxLength={maxLength}
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
