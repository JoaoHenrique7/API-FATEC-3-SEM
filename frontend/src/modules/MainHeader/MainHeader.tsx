import React from 'react';
import styles from './MainHeader.module.css';
import logo from '../../assets/logo.svg'
import visiona from '../../assets/visiona.svg'

class MainHeader extends React.Component{
    render() {
      return (
        <div className={styles.mainHeader}>
          <img className={styles.logoVisiona} src={logo} alt='logo'/>
          <img className={styles.visiona} src={visiona} alt='visiona'/>
        </div>
      );
    }
  }

export default MainHeader;