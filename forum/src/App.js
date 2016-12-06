/// <reference path="../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

import React, { Component } from 'react';
import './App.css';

import NavigationBar from './Components/navbar/navigationBar';
import HeaderView from './Components/header/headerView';
import Footer from './Components/footer/footerView';

import { Link } from 'react-router'
import observer from './Models/observer';

export default class App extends Component {
  constructor(props){
        super(props);
        this.state={
            loggedIn: false,
            username: ''            
        };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this)
  }
  componentDidMount (){
      this.onSessionUpdate();
  }

  onSessionUpdate(){
      let name = sessionStorage.getItem("username");
      if (name) {
          this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
      } else {
          this.setState({ loggedIn: false, username: '' });
      }
  }

  render() {
      let navbar = {};
      if(!this.state.loggedIn){
          navbar = (
              <NavigationBar>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
              </NavigationBar>
          )
      }
      else{
          navbar = (
              <NavigationBar>
                    <Link to="/">Home</Link>
                    <Link to="/logout">Logout</Link>
              </NavigationBar>
          )
      }
    return (
        <div className="App">
            <HeaderView/>
            {navbar}
            {this.props.children}
            <Footer/>
        </div>
    );
  }
}
