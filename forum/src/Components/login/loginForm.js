import React, {Component} from 'react';
import '../../Css/login/login.css';

export default class LoginForm extends Component{
    

    render(){
        return (
        <div className="login-form">
            <form onSubmit={this.props.onSubmitHandler}> 
                <div className="form-group">
                    <label htmlFor="username" className="user-n-pass">Username</label>
                    <input 
                    type="text"
                    name="username"
                    className="user-box"
                    placeholder="Username"
                    value={this.props.username} 
                    onChange={this.props.onChangeHandler}
                    disabled={this.props.submitDisabled}/> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="exampleInputPassword1" className="user-n-pass">Password</label>
                    <input 
                    type="password"
                    name="password"
                    className="pass-box"
                    placeholder="Password"
                    value={this.props.password} 
                    onChange={this.props.onChangeHandler}
                    disabled={this.props.submitDisabled}/> 
                </div>
                <div className="form-group"> 
                    <button type="submit" className="login-button" disabled={this.props.submitDisabled}>Login</button>
                </div>
            </form>
        </div>
    )}
}