import React from "react";
import styles from "./InitialUser.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import { Session } from "../../model/utils/Session";

class InitialUser extends React.Component {
  render() {
    const breadcrumbList = [{ name: "Painel do Usuário" }];
    const session = Session();
    return (
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <Navbar pathList={breadcrumbList} />
        </div>
        <div className={styles.container}>
          <p className={styles.text}>Usuário: {session.userName}</p>
          <p className={styles.text}>Nome: {session.fullName}</p>
          <p className={styles.text}>E-mail: {session.email}</p>
          <p className={styles.text}>CPF: {session.cpf}</p>
        </div>
      </div>
    );
  }
}

export default InitialUser;
