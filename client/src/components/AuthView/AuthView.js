import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername, updateUserId, updatePassword } from '../../ducks/reducer';
import auth_logo from '../../auth_logo.png';
import axios from 'axios';

class AuthView extends Component {
    login() {
        const bodyData = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post(`/api/auth/login`, bodyData)
        .then(res => {
            updateUserId(res.data.user_id)
            this.props.history.push('/dashboard')
        });
    }
    register() {
        const bodyData = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post(`/api/auth/register`, bodyData)
        .then(res => {
            updateUserId(res.data.user_id)
            this.props.history.push('/dashboard')
        });
    }
    render(){
        const {updateUsername, updatePassword} = this.props;
        return(
            <div>
                <div>
                    <img src={auth_logo} alt="home logo"/>
                    <p>Username</p>
                    <input type="text" onChange={(event) => updateUsername(event.target.value)}/>
                    <p>Password</p>
                    <input type="password" onChange={(event) => updatePassword(event.target.value)}/>
                </div>
                <div>
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.register()}>Register</button>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    const { username, userId, password} = state;
    return {
        username,
        userId,
        password
    };
}

export default connect(mapStateToProps, {updateUsername, updateUserId, updatePassword})(AuthView);