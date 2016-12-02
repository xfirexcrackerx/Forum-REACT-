import React, { Component } from 'react';
import './NavigationBar.css';


export default class NavigationBar extends Component {
    render() {
        if (this.props.username==null)
            return (
            <div className="navigation-bar">
                <a href="#" onClick={this.props.homeClicked}>Home</a>
                <a href="#" onClick={this.props.loginClicked}>Login</a>
                <a href="#" onClick={this.props.registerClicked}>Register</a>
            </div>
        );
        else
            return(
                <div className="navigation-bar">
                    <span className="loggedInUserWelcome">Welcome, {this.props.username}!</span>
                    <a href="#" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" onClick={this.props.logoutClicked}>Logout</a>
                    <a href="#" onClick={this.props.forumClicked}>Forum</a>
                    <a href="#" onClick={this.props.createPostClicked}>Create post</a>
                </div>
            )
    }
}
