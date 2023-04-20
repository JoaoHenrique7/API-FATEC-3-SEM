import { Component } from 'react';
import UserService from '../../services/UserService/UserService';
import Form from '../../modules/LoginForm/LoginForm';

interface LogOnPageProp {

}

interface LogonPageState {

}

class LogonPage extends Component<LogOnPageProp, LogonPageState> {
    handleLogin = async (email: string, password: string) => {
        let matchUser = await UserService.authenticateUser(email, password);

        if (matchUser.ok) {
            window.localStorage.setItem("session_data", JSON.stringify(matchUser.data))
            window.localStorage.setItem("session_token", matchUser.token!);
            window.open('/', '_self');
        } else {
            alert('Invalid credentials');
        }
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleLogin} />
            </div>
        );
    }
}

export default LogonPage;