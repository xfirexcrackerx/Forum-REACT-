/// <reference path="../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';

import NavigationBar from './Components/NavigationBar';
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

  handleAjaxError(event,response){
      let errorMsg = JSON.stringify(response);
      if(response.readyState===0)
          errorMsg="Cannot connect due to network problemche";
      if (response.responseJSON && response.responseJSON.description)
          errorMsg=response.responseJSON.description;
      this.showError(errorMsg);
  }

  showInfo(message){
      $('#infoBox').text(message).show();
      setTimeout(function () {
          $('#infoBox').fadeOut();}, 3000);
  }
  showError(errorMsg){
      $('#errorBox').text("Error: "+errorMsg).show();
  }
  showView(reactComponent){
        ReactDOM.render(
            reactComponent,
            document.getElementById('main'));
        $('#errorBox').hide();
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

    /*showHomeView(){
       this.showView(<HomeView/>)
    }
    /*showLoginView(){
        this.showView(<LoginView onsubmit={this.login.bind(this)}/>)
    }
    /*showRegisterView(){
        this.showView(<RegisterView/>);
    }
    showForumView(){

    }
    showCreatePostView(){

    }
    logout(){

    }*/
}
