import React from "react";
import styles from "./Sidebar.module.css";
import logoutImage from "../../../../assets/logout.svg";
import Profile from "./Profile/Profile";
import LinkGroup from "../../../../components/LinkGroup/LinkGroup";
import MainHeader from "../../../../modules/MainHeader/MainHeader";
import LogoutButton from '../../../../components/Button/Button'

class Sidebar extends React.Component {

    redirect = () => {
        window.open("/auth/login", "_self");
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
                        <LogoutButton 
                            type="button"
                            className="logoutButton"
                            placeholder="Logout"
                            imageSrc={logoutImage}
                            onClick={this.redirect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
