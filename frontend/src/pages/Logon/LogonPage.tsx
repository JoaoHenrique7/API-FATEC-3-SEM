import { Component } from 'react';
// import * as bcrypt from 'bcryptjs';
import UserService from '../../services/UserService/UserService';
import Form from '../../modules/LoginForm/LoginForm';

interface LogonPageState {
    loggedIn: boolean;
}

class LogonPage extends Component<{}, LogonPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    handleLogin = async (email: string, password: string) => {
        // const salt = bcrypt.genSaltSync(10);
        // const hashEmail = bcrypt.hashSync(email, salt)
        // const hashPassword = bcrypt.hashSync(password, salt);
        let matchUser = UserService.authenticateUser(email, password);
        if (await matchUser === true) {
            this.setState({ loggedIn: true });
            window.open('/dashboard', '_self');
        } else {
            alert('Invalid credentials');
        }
    };

    handleLogout = () => {
        this.setState({ loggedIn: false });
        window.open('/', '_self');
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