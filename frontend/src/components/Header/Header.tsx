import React, { Component } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

class Header extends Component<HeaderProps> {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className={styles.title}>
        <h1>{title}</h1>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      </div>
    );
  }
}

export default Header;
