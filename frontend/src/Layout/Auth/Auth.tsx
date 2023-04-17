import { Component } from "react";
import { Outlet } from "react-router-dom";

class AppAuth extends Component {
    render () {
        return (
            <div>
                <Outlet />
            </div>
        )
    }
}

export default AppAuth;