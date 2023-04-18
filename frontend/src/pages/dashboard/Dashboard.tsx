import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../modules/Navbar/Navbar";
import Table from "../../modules/Table/Table";

class Dashboard extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <Navbar />
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
