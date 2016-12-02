import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

export default class App extends Component {
  constructor(props){
        super(props);
        this.state={
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        };
  }
  componentDidMount (){
      $(document).on({
          ajaxStart:function () {$("#loadingBox").show()},
          ajaxStop:function () {$("#loadingBox").hide()}
      });

      $(document).ajaxError(
          this.handleAjaxError.bind(this));

      //В НАЧАЛОТО ДА ПОКАЗВА HOME-A А НЕ main app view (Р. 78)
      this.showHomeView();
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
      $('infoBox').text(message).show();
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
                <NavigationBar
                    username={this.state.username}
                    homeClicked={this.showHomeView.bind(this)}
                    loginClicked={this.showLoginView.bind(this)}
                    registerClicked={this.showRegisterView.bind(this)}
                    forumClicked={this.showForumView.bind(this)}
                    createPostClicked={this.showCreatePostView.bind(this)}
                    logoutClicked={this.logout.bind(this)}
                />
                <div id="error-box">Errors cum here</div>
                <div id="info-box">Infos cum here</div>
                <div id="loading-box">Loading....</div>
            </header>



            <div id="main">Main app view</div>



            <Footer/>
        </div>
    );
  }

    showHomeView(){
       this.showView(<HomeView/>)
    }
    showLoginView(){
        this.showView(<LoginView/>)
    }
    showRegisterView(){
        this.showView(<RegisterView/>);
    }
    showForumView(){

    }
    showCreatePostView(){

    }
    logout(){

    }
}
