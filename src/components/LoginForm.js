import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
        <div className='login-form'>
            <h3>Login</h3>
            <input type='text' name='Username' placeholder='Username'></input>
            <span>   </span>
            <input type='text' name='Password' placeholder='Password'></input>
        </div>
        );
    }
}