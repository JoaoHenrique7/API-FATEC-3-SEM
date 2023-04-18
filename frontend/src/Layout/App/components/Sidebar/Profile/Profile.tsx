import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../../../../assets/doodleAvatar.svg";

class Profile extends React.Component {
  render() {
    return (
        <div className={styles.profileArea}>
        <div className={styles.profileImageLine}>
          <div className={styles.profileImageContainer}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className={styles.profileName}>Lorem Ipsum</div>
        <div className={styles.profileTitle}>Administrador</div>
      </div>
    )
  }
}

export default Profile;