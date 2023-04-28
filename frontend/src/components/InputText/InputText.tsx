import React, { Component, ChangeEvent } from 'react';
import Styles from './InputText.module.css';

interface InputTextProps {
  value: string;
  mytype: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
}

class InputText extends Component<InputTextProps> {
    render() {
        const { value, onChange, placeholder, mytype, label } = this.props;
        return (
            <div className={ Styles.inputGroup }>
                <label>{ label }</label>
                <input
                    className={Styles.inputText}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={mytype}
                />
            </div>
        );
    }
}

export default InputText;
