/// <reference path="../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';

import NavigationBar from './Components/NavigationBar';
import HomeView from './Components/home/homeView';
import Footer from './Components/Footer';

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
    return (
        <div className="App">
            <header>
                <div id="errorBox">Errors cum here</div>
                <div id="infoBox">Infos cum here</div>
                <div id="loadingBox">Loading....</div>
            </header>
            <NavigationBar>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                    
            </NavigationBar>
            {this.props.children}
            <div id="main">Main app view</div>
            <Footer/>
        </div>
    );
  }
}
