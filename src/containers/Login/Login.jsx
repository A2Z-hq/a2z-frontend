import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: ''

        }
    }

    render() {
        return (
            <div>
                <form className="login-form">
                    <div className="container">
                        <h1>Login </h1>
                        <p>Please enter your credentials to access your account.</p>
                        <br />
                        <label for="UserName" class="username">UserName</label>
                        <input
                            type={Text}
                            required="true"
                            name="UserName"
                            placeholder="Enter your UserName"
                            onChange={(event, newValue) => this.setState({ user_name: newValue })}
                        />
                        <br />
                        <label for="password" class="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            required="true"
                            name="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <label></label>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;