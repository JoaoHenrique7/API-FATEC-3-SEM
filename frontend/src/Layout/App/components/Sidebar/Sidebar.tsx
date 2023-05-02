import React from "react";
import styles from "./Sidebar.module.css";
import MainHeader from "../../../../modules/MainHeader/MainHeader";
import Button from '../../../../components/Button/Button'
import { Session } from "../../../../model/utils/Session";
import SidebarItem from "../SidebarItem/SidebarItem";
import Area from "../Area/Area";

class Sidebar extends React.Component {

    redirect = () => {
        window.localStorage.removeItem("session_token");
        window.open("/auth/login", "_self");
    };

    render() {
        const session = Session();
        console.log(typeof session.profile.type)

        return (
            <aside className={ styles.sidebarWrapper }>
                <MainHeader />
                <section className={ styles.sidebar }>
                    <div className={ styles.profile }>
                        <span className={ styles.image }></span>
                        <div className={ styles.info }>
                            <p className={ styles.fullname }> { session.fullName.split(' ')[0] } </p>
                            <p className={ styles.profileName }> { session.profile.name } </p>
                        </div>
                    </div>
                    <Area allowedProfiles={ null } label="Navegação">
                        <SidebarItem to={ '/' } label="Dashboard" icon="user" allowedProfiles={[ 1 ]} />
                        <SidebarItem to={ '/initialUser' } label="Painel do usuário" icon="user" allowedProfiles={[ 0 ]} />
                    </Area>
                    <Area allowedProfiles={[ 1 ]} label="Gerenciamento">
                        <SidebarItem to={ '/createUser' } label="Usuários" icon="user" allowedProfiles={[ 1 ]} />
                    </Area>
                    <Button  type="button" className="logout" placeholder="Logout" onClick={ this.redirect } icon="logout" />
                </section>
            </aside>
        );
    }
}

export default Sidebar;
