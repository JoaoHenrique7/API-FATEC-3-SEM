import React from "react";
import styles from "./Content.module.css";
import Table from "../Table/Table";
import Header from "../../components/Header/Header";

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Header title="Dashboard" subtitle="Lista de usuários" />
        <div className={styles.container}>
          <Table />
        </div>
      </div>
    );
  }
}

export default Content;
