import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import Table from "../../modules/Table/Table";

class Dashboard extends React.Component {
    render() {
      const breadcrumbList = [{name: "Dashboard"}, {name: "Gerência de usuários"}];
        return (
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <Navbar pathList={breadcrumbList}/>
                    <h1>Dashboard</h1>
                </div>
                <div className={styles.container}>
                    <Table />
                </div>
            </div>
        );
    }
}

export default Dashboard;
