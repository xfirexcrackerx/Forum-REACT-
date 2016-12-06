import React, {Component} from 'react';

export default class LoginForm extends Component{
    

    render(){
        return (
        <div className="login-form">
            <form onSubmit={this.props.onSubmitHandler}> 
                <div className="form-group"> 
                    <label htmlFor="username" className="white">Username</label> 
                    <input 
                    type="text"
                    name="username"
                    className="form-control" 
                    id="username" 
                    placeholder="Username"
                    value={this.props.username} 
                    onChange={this.props.onChangeHandler}
                    disabled={this.props.submitDisabled}/> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="exampleInputPassword1" className="white">Password</label> 
                    <input 
                    type="password"
                    name="password"
                    className="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={this.props.password} 
                    onChange={this.props.onChangeHandler}
                    disabled={this.props.submitDisabled}/> 
                </div>
                <div className="form-group"> 
                    <button type="submit" className="btn btn-default" disabled={this.props.submitDisabled}>Submit</button> 
                </div>
            </form>
        </div>
    )}
}