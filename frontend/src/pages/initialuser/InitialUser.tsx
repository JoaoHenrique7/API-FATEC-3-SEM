import React from "react";
import styles from "./InitialUser.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import { Session } from "../../model/utils/Session";

class InitialUser extends React.Component {
    render() {
      const breadcrumbList = [{name: "Painel do Usuário"}];
      const session = Session();  
      return (
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <Navbar pathList={breadcrumbList}/>
                </div>
                <div className={styles.container}>
                    <p className={styles.text}>Nome de Usuário: { session.userName }</p>
                    <p className={styles.text}>Nome: { session.fullName }</p>
                    <p className={styles.text}>Email: { session.email}</p>
                    <p className={styles.text}>Cpf: { session.cpf }</p>
                </div>
            </div>
        );
    }
}

export default InitialUser;
