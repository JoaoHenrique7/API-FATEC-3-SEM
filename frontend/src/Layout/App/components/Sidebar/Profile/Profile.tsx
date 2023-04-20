import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../../../../assets/doodleAvatar.svg";
import { Session } from "../../../../../model/utils/Session";

class Profile extends React.Component {
    render() {
        const session = Session();

        return (
            <div className={styles.profileArea}>
                <div className={styles.profileImageLine}>
                    <div className={styles.profileImageContainer}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
                <div className={styles.profileName}> { session.fullName.split(' ')[0] } </div>
                <div className={styles.profileTitle}> { session.profile.name } </div>
            </div>
        )
    }
}

export default Profile;