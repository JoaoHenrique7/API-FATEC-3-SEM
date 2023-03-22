import React from "react";
import styles from "./Sidebar.module.css";
import logoutImage from "../../assets/logout.svg";
import avatar from "../../assets/doodleAvatar.svg";
import arrow from "../../assets/caretRight.svg";

class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.upperArea}>
          <div className={styles.profileArea}>
            <div className={styles.profileImageLine}>
              <div className={styles.profileImageContainer}>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className={styles.profileName}>Lorem Ipsum</div>
            <div className={styles.profileTitle}>Administrador</div>
          </div>
          <div className={styles.linkArea}>
            <div className={styles.linkGroup}>
              <label>Navegação</label>
              <div className={styles.linkBtn}>
                <div>Dashboard</div>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomArea}>
          <div className={styles.logoutBtn}>
            <img className={styles.logoutIcon} src={logoutImage} alt="logout" />
            <div>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
