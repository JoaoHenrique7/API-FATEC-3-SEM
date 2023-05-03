import React from "react";
import styles from "./Dashboard.module.css";
import Table from "../../modules/Table/Table";
import { Navigate } from "react-router-dom";
import { Session } from "../../model/utils/Session";
import MainHeader from "../../components/MainHeader/MainHeader";

class Dashboard extends React.Component {
    render() {
        const session = Session();

        if (session.profile.type === 1) {
            return (
                <div className={styles.content}>
                    <MainHeader title="Dashboard" area="Navegação" pages={[ "Dashboard" ]} />
                    <div className={styles.container}>
                        <Table />
                    </div>
                </div>
            );
        } else {
            return <Navigate to="/initialuser" />;
        }
    }
}

export default Dashboard;
