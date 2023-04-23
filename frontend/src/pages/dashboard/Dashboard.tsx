import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import Table from "../../modules/Table/Table";
import { Navigate } from "react-router-dom";
import { Session } from "../../model/utils/Session";

class Dashboard extends React.Component {
    render() {
        const breadcrumbList = [{ name: "Dashboard" }, { name: "Gerência de usuários" }];
        const session = Session();
        if (session.profile.type === 1) {
            return (
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <Navbar pathList={breadcrumbList} />
                        <h1>Dashboard</h1>
                    </div>
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
