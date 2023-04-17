import { Component } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Auth.module.css";
import Illustration from "./components/Illustration/Illustration";
import Header from "./components/Header/Header";

class AppAuth extends Component {
    render () {
        return (
            <div className={ styles.layout }>
                <Header />
                <Illustration />
                <Outlet />
            </div>
        )
    }
}

export default AppAuth;