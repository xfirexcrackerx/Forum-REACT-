import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Login from './Components/login/loginView';
import Home from './Components/home/homeView'
import Logout from './Components/logout/logoutView';
import Register from './Components/register/RegisterView';
import CreateCategory from './Components/category/createCategoryView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Css/main.css';

import { Router, browserHistory, Route, IndexRoute } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="register" component={Register}></Route>
        <Route path="login" component={Login}></Route>
          <Route path="create" component={CreateCategory}></Route>
        <Route path="logout" component={Logout}/>
      </Route>
      
  </Router>,
  document.getElementById('app')
);
