import React from "react";
import styles from "./Sidebar.module.css";
import logoutImage from "../../assets/logout.svg";
import Profile from "../../components/Profile/Profile";
import LinkGroup from "../../components/LinkGroup/LinkGroup";
import Button from "../../components/Button/Button";

class Sidebar extends React.Component {
  redirect = () => {
    window.open("/", "_self");
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.upperArea}>
          <Profile />
          <LinkGroup />
        </div>
        <div className={styles.bottomArea}>
          <Button label="Logout" imageSrc={logoutImage} onClick={this.redirect} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
