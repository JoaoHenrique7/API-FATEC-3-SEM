import React from "react";
import styles from "./Dashboard.module.css";
import MainHeader from "../../modules/MainHeader/MainHeader";
import Sidebar from "../../modules/Sidebar/Sidebar";
import Content from "../../modules/Content/Content";
import Navbar from "../../modules/Navbar/Navbar";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.homeContent}>
        <MainHeader />
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
