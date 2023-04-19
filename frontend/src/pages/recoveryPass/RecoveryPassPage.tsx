import { Component } from 'react';
import UserService from '../../services/UserService/UserService';
import Form from '../../modules/RecoveryPassForm/RecoveryPassForm';

interface RecoveryPassPageState {
    loggedIn: boolean;
}

class RecoveryPassPage extends Component<{}, RecoveryPassPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    handleLogin = async (email: string) => {
        let matchUser = UserService.recoveryPass(email);
        if (await matchUser === true) {
            this.setState({ loggedIn: true });
            window.open('/login');
        } else {
            alert('Invalid email');
        }
    };

    // handleLogout = () => {
    //     this.setState({ loggedIn: false });
    //     window.open('/', '_self');
    // };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleLogin} />
            </div>
        );
    }
}

export default RecoveryPassPage;