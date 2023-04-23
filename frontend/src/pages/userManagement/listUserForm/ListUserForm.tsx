import React from "react";
import styles from "./ListUserForm.module.css";
import Navbar from "../../../modules/Navbar/Navbar";
import Table from "../../../modules/Table/Table";

class ListUserForm extends React.Component {
    redirectPage() {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/createUser";
    }

    render() {
      const breadcrumbList = [{name: "Home"}, {name: "Gerenciamento de Usuários"}];
        return (
            <div className={styles.content}>
             <div className={styles.titleContainer}>
                    <Navbar pathList={breadcrumbList}/>
                    <h1>Listagem de Usuários</h1>
                </div>
                <div className={styles.container}>
                    <button onClick={() => this.redirectPage()} className={styles.button} type="button">
                    Adicionar Usuário
                    </button>
                    <Table />
                </div>
            </div>
        );
    }
}

export default ListUserForm;
