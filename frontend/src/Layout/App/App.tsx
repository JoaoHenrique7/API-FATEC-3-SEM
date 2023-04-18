import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends React.Component {
    render() {
        return (
            <div className={ styles.layout }>
                <Sidebar />
                <Outlet />
            </div>
        );
    }
}

export default App;