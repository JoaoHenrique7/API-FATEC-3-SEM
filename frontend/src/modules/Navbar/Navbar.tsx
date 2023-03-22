import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        <Breadcrumb />
      </div>
    );
  }
}

export default Navbar;
