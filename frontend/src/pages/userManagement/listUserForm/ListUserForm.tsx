import React from "react";
import styles from "./ListUserForm.module.css";
import Table from "../../../modules/Table/Table";
import { Navigate } from "react-router-dom";
import { Session } from "../../../model/utils/Session";
import MainHeader from "../../../components/MainHeader/MainHeader";
import { FaPlus } from "react-icons/fa";

class ListUserForm extends React.Component {
    redirectPage() {
        window.location.href = "/createUser";
    }

    render() {
        const session = Session();
        if (session.profile.type === 1) {
            return (
                <div className={ styles.content }>
                    <MainHeader title="Listagem de Usuários" area="Navegação" pages={[ "Usuários" ]} />
                    <div className={ styles.container }>
                        <div className={ styles.options }>
                            <button onClick={() => this.redirectPage()} className={ styles.button } type="button">
                                <FaPlus />
                                Adicionar Usuário
                            </button>
                        </div>
                        <Table />
                    </div>
                </div>
            );
        } else {
            return <Navigate to="/initialuser" />;
        }
    }
}

export default ListUserForm;
