import React from "react";
import styles from "./InitialUser.module.css";
import { Session } from "../../model/utils/Session";
import MainHeader from "../../components/MainHeader/MainHeader";

class InitialUser extends React.Component {
    render() {
      const session = Session();  
      return (
            <div className={styles.content}>
                <MainHeader title="Painel do Usuário" area="Navegação" pages={[ "Painel do Usuário" ]} />
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
