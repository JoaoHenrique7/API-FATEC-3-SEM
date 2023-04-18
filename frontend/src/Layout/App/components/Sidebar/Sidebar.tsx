import React from "react";
import styles from "./Sidebar.module.css";
import logoutImage from "../../../../assets/logout.svg";
import Profile from "./Profile/Profile";
import LinkGroup from "../../../../components/LinkGroup/LinkGroup";
import MainHeader from "../../../../modules/MainHeader/MainHeader";

class Sidebar extends React.Component {

    redirect = () => {
        window.open("/", "_self");
    };

    render() {
        return (
            <div className={ styles.sidebarWrapper }>
                <MainHeader />
                <div className={ styles.sidebar }>
                    <div className={ styles.upperArea }>
                        <Profile />
                        <LinkGroup />
                    </div>
                    <div className={ styles.bottomArea }>
                        <button className={ styles.logoutBtn } onClick={this.redirect} >
                            <img className={ styles.logoutIcon } src={ logoutImage } alt="logout" />
                            <div>Logout</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
