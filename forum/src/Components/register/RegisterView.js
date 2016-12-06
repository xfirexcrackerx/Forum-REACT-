import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import user from '../../Models/user';

export default class RegisterView extends Component{
    constructor(props){
        super(props);
        this.state = { username: '', password: '' };
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        
    }

    render(){ return(
        <div className="register-view">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <h1 className="white">Register</h1>
                    <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    onChangeHandler={this.onChangeHandler.bind(this)}
                    onSubmitHandler={this.onSubmitHandler.bind(this)}
                    submitDisabled={this.state.submitDisabled}/>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    )}

    onChangeHandler(event) {  
        event.preventDefault();
        switch(event.target.name){
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default:
                break;
        }
    }
    onSubmitHandler(event){
        event.preventDefault();
        
        this.setState({ submitDisabled: true });
        user.register(this.state.username, this.state.password, this.onSubmitResponse);
    }
    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }
    
}

RegisterView.contextTypes = {
    router: React.PropTypes.object
};