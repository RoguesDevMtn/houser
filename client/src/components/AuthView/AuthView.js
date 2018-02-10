import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername, updateUserId, updatePassword } from '../../ducks/reducer';
import auth_logo from '../../auth_logo.png';
import axios from 'axios';
import './AuthView.css'

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
            <div className="auth-content">
                <div>
                    <img className="auth-logo" src={auth_logo} alt="home logo"/>
                    <div className="input-label">Username</div>
                    <input className="auth-input" type="text" onChange={(event) => updateUsername(event.target.value)}/>
                    <div className="input-label">Password</div>
                    <input className="auth-input" type="password" onChange={(event) => updatePassword(event.target.value)}/>
                </div>
                <div>
                    <button className="auth-button login" onClick={() => this.login()}>Login</button>
                    <button className="auth-button register" onClick={() => this.register()}>Register</button>
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