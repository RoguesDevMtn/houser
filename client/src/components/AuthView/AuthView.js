import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword } from '../../ducks/reducer';

class AuthView extends Component {
    render(){
        const {updateUsername, updatePassword} = this.props;
        return(
            <div></div>
        )
    }
}

function mapStateToProps(state){
    const { username, password} = state;
    return {
        username,
        password
    };
}

export default connect(mapStateToProps, {updateUsername, updatePassword})(AuthView);